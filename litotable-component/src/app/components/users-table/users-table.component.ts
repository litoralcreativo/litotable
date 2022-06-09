import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FieldConstrianStyle,
  LitoGeneralAction,
  LitoRowAction,
  LitotableComponent,
  RowStyle,
  TableActionsConfig,
  TableConfigurations,
} from 'lito-table';
import { Observable } from 'rxjs';
import { FinanciacionDetalle } from 'src/app/models/FinanciacionDetalle.model';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  datos!: Observable<User[]>;
  type: User = new User();
  tableConfig: TableConfigurations;
  fieldConstrains: FieldConstrianStyle[] = [];
  tableActionsConfig: TableActionsConfig;
  financiacionForm?: Component;
  @ViewChild(LitotableComponent) lito!: LitotableComponent;

  constructor(private usersService: UsersService) {
    this.tableConfig = {
      hoverStyle: RowStyle.BORDER,
      selectionStyle: RowStyle.SHADOW,
      headerBorders: true,
      paginationSizes: [7, 13, 23],
      footerAction: {
        icon: 'add',
        content: 'Agregar cuota',
        color: 'green',
        actionResult: {
          willAddRow: true,
          nonObservableAction: this.onFooterButtomClick,
        },
        template: this.financiacionForm,
      },
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
          updatePerformable: (selectedRows: Set<User>) => {
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
          updatePerformable: (selectedRows: Set<User>) => {
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
          updatePerformable: (selectedRows: Set<User>) => {
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

  ngOnInit() {
    this.datos = this.usersService.getAll();
  }

  //#region "Users Actions"
  onMultipleActionOutput($event: {
    operation: LitoGeneralAction;
    data: Set<FinanciacionDetalle>;
  }) {
    switch (
      $event.operation.name
      /* case 'eliminar':
        this.deleteMultiple($event.data);
        break;
      case 'verificar':
        this.verifyMultiple($event.data);
        break;
      case 'editar':
        break; */
    ) {
    }
  }

  onSingleActionOutput($event: { operation: LitoRowAction; data: User }) {
    switch (
      $event.operation.name
      /* case 'quitar':
        this.deleteSingle($event.data);
        break;
      case 'editar':
        this.openEditSingle($event.data);
        break; */
    ) {
    }
  }
  //#endregion

  onFooterButtomClick() {
    console.log('footer action implemented on container component');
  }
}
