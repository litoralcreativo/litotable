import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ColumnType,
  FieldConstrianStyle,
  LitoGeneralAction,
  LitoRowAction,
  LitotableComponent,
  MesurableConstrainType,
  NumberConstrain,
  RowStyle,
  TableActionsConfig,
  TableConfigurations,
} from 'lito-table';
import { Observable } from 'rxjs';
import { FinanciacionDetalle } from 'src/app/models/FinanciacionDetalle.model';
import { FinanciacionService } from 'src/app/services/financiacion.service';

@Component({
  selector: 'app-financiacion-table',
  templateUrl: './financiacion-table.component.html',
  styleUrls: ['./financiacion-table.component.css'],
})
export class FinanciacionTableComponent implements OnInit {
  datos!: Observable<FinanciacionDetalle[]>;
  fieldConstrains: FieldConstrianStyle[] = [];
  tableConfig: TableConfigurations;
  tableActionsConfig: TableActionsConfig;
  type: FinanciacionDetalle = new FinanciacionDetalle();
  @ViewChild(LitotableComponent) lito!: LitotableComponent;

  constructor(private financiacionService: FinanciacionService) {
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
        /* {
          name: 'editar',
          icon: 'edit',
          tooltip: 'editar esta financiacion',
          color: 'green',
          actionResult: {
            willUpdateRow: true,
          },
        }, */
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
      /* footerAction: {
        icon: 'add',
        content: 'Agregar cuota',
        color: 'green',
        actionResult: {
          willAddRow: true,
          nonObservableAction: this.onFooterButtomClick,
        },
        template: this.financiacionForm,
      }, */
    };

    /* Acciones de la tabla */
    this.tableActionsConfig = new TableActionsConfig(
      [
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
      ],
      false
    );
  }

  ngOnInit(): void {
    this.datos = this.financiacionService.getRandom();
  }

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
      /* case 'editar':
        this.openEditSingle($event.data);
        break; */
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
}
