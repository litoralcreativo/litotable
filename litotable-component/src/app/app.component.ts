import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './services/users-service.service';
import { User } from './models/User';
import {
  GeneralActionScope,
  LitoGeneralAction,
  LitoRowAction,
  RowStyle,
  TableActionsConfig,
  TableConfigurations,
} from 'lito-table';
import {
  FieldConstrianStyle,
  MesurableConstrainType,
  NumberConstrain,
} from 'lito-table';
import { Observable } from 'rxjs';
import { ColumnType } from 'lito-table';

import {
  FinanciacionDetalle,
  generateData,
} from './models/FinanciacionDetalle.model';
import { FinanciacionService } from './services/financiacion.service';
import { LitotableComponent } from 'lito-table';
import { MatDialog } from '@angular/material/dialog';
import { FormularioCreacionComponent } from './componentes/formulario-creacion/formulario-creacion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //datos!: Observable<User[]>;
  datos!: Observable<FinanciacionDetalle[]>;
  //type: User = new User();
  type: FinanciacionDetalle = new FinanciacionDetalle();
  tableConfig: TableConfigurations;
  fieldConstrains: FieldConstrianStyle[] = [];
  tableActionsConfig: TableActionsConfig;
  financiacionForm?: Component;
  @ViewChild(LitotableComponent) lito!: LitotableComponent;

  constructor(
    private usersService: UsersService,
    private financiacionService: FinanciacionService,
    public dialog: MatDialog
  ) {
    /* Aggrego formatos condicionales manualmente */
    this.fieldConstrains.push({
      propertyKey: 'cuota',
      constrainName: 'verificadas',
      type: ColumnType.INTEGER,
      constrain: new NumberConstrain(
        MesurableConstrainType.EQUALS,
        [99, 0],
        { 'background-color': 'rgb(7, 55, 99)', color: 'rgb(159, 197, 232)' },
        true
      ),
    });

    this.tableConfig = {
      hoverStyle: RowStyle.BORDER,
      selectionStyle: RowStyle.SHADOW,
      headerBorders: true,
      paginationSizes: [7, 13, 23],
      actionsColumn: [
        {
          name: 'editar',
          icon: 'edit',
          tooltip: 'editar esta financiacion',
          color: 'green',
          actionResult: {
            willUpdateRow: true,
          },
        },
        {
          name: 'quitar',
          icon: 'delete',
          tooltip: 'quitar esta financiacion',
          color: 'red',
          actionResult: {
            willDeleteRow: true,
            actionObservable: financiacionService.deleteOne(),
          },
          confirmation: {
            title: 'Confirmacion',
            content: 'Realmente desea eliminar esta financiacion?',
          },
        },
      ],
      footerAction: {
        icon: 'add',
        content: 'Agregar cuota',
        color: 'green',
        actionResult: {
          willAddRow: true,
          /* actionObservable: financiacionService.createOne(), */
          nonObservableAction: this.onFooterButtomClick,
        },
        template: this.financiacionForm,
      },
    };

    /* Acciones de la tabla */
    this.tableActionsConfig = new TableActionsConfig([
      // eliminar
      {
        name: 'eliminar',
        icon: 'delete',
        content: 'ELIMINAR',
        color: 'red',
        mustLockRows: true,
        confirmation: {
          title: 'Eliminacion',
          content: 'Realmente desea remover estas finaniaciones?',
          primaryKey: 'cuota',
        },
        performable: { state: true, tooltip: '' },
        updatePerformable: (selectedRows: Set<FinanciacionDetalle>) => {
          let performable = { state: true, tooltip: 'placeholder' };
          if (selectedRows.size == 0)
            return {
              state: false,
              tooltip: 'al menos un detalle debe seleccionarse',
            };
          return performable;
        },
      },
      // verificar
      {
        name: 'verificar',
        icon: 'verified',
        content: 'VERIFICAR',
        color: 'rgba(80, 80, 200)',
        mustLockRows: true,
        confirmation: {
          title: 'Verificacion',
          content: 'Realmente desea verificar estas financiaciones?',
          primaryKey: 'cuota',
        },
        performable: { state: true, tooltip: '' },
        updatePerformable: (selectedRows: Set<FinanciacionDetalle>) => {
          let performable = { state: true, tooltip: 'placeholder' };
          if (selectedRows.size == 0)
            return {
              state: false,
              tooltip: 'al menos un detalle debe seleccionarse',
            };
          return performable;
        },
      },
      // editar
      {
        name: 'editar',
        icon: 'edit',
        content: 'EDITAR',
        color: 'rgba(80, 150, 80)',
        mustLockRows: true,
        performable: { state: true, tooltip: '' },
        updatePerformable: (selectedRows: Set<FinanciacionDetalle>) => {
          let performable = { state: true, tooltip: 'placeholder' };
          if (selectedRows.size != 1)
            return {
              state: false,
              tooltip: 'al menos un detalle debe seleccionarse',
            };
          return performable;
        },
      },
    ]);
  }

  openEditDialog(row: FinanciacionDetalle): void {
    const dialogRef = this.dialog.open(FormularioCreacionComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        setTimeout(() => {
          let newRow = { ...row };
          newRow.incremento = result.incremento;
          this.lito.updateRow(row, newRow);
        }, 2000);
      } else {
        this.lito.unLockRow(row);
      }
    });
  }

  //#region "Angular LifeCicle"
  ngOnInit() {
    this.datos = this.financiacionService.getRandom();
    //this.datos = this.usersService.getAll();
  }
  ngOnViewInit() {}
  //#endregion

  //#region "Users Actions"
  onMultipleActionOutput($event: {
    operation: LitoGeneralAction;
    data: Set<FinanciacionDetalle>;
  }) {
    switch ($event.operation.name) {
      case 'eliminar':
        this.deleteMultiple($event.data);
        break;
      case 'verificar':
        this.verifyMultiple($event.data);
        break;
      case 'editar':
        break;
    }
  }

  onSingleActionOutput($event: {
    operation: LitoRowAction;
    data: FinanciacionDetalle;
  }) {
    switch ($event.operation.name) {
      case 'quitar':
        this.deleteSingle($event.data);
        break;
      case 'editar':
        this.openEditSingle($event.data);
        break;
    }
  }

  deleteMultiple(rows: Set<FinanciacionDetalle>) {
    rows.forEach((row) => {
      setTimeout(() => {
        this.financiacionService.deleteOne().subscribe({
          next: (newRow) => {
            this.lito.updateRow(row, null);
          },
          complete: () => {
            this.lito.unLockRow(row);
          },
        });
      }, 2000 + Math.random() * 2000);
    });
  }

  deleteSingle(row: FinanciacionDetalle) {
    setTimeout(() => {
      this.financiacionService.deleteOne().subscribe({
        next: (newRow) => {
          this.lito.updateRow(row, null);
        },
        complete: () => {
          this.lito.unLockRow(row);
        },
      });
    }, 2000 + Math.random() * 2000);
  }

  verifyMultiple(rows: Set<FinanciacionDetalle>) {
    rows.forEach((row) => {
      setTimeout(() => {
        this.financiacionService.verifyOne(row).subscribe({
          next: (newRow) => {
            this.lito.updateRow(row, newRow);
          },
          complete: () => {
            // this.lito.unLockRow(row);
          },
        });
      }, 2000 + Math.random() * 2000);
    });
  }

  openEditSingle(row: FinanciacionDetalle) {
    this.openEditDialog(row);
  }
  //#endregion

  onFooterButtomClick() {
    console.log('footer action implemented on container component');
  }
}
