import { Component, OnInit, TemplateRef, Type, ViewChild } from '@angular/core';
import { UsersService } from './services/users-service.service';
import { User } from './models/User';
import {
  LitotableColor,
  RowStyle,
  TableConfigurations,
} from './litotable/configurations/litotable.config';
import {
  FieldConstrianStyle,
  NumberConstrain,
  MesurableConstrainType,
} from './litotable/configurations/fieldConstriansStyle';
import { Observable } from 'rxjs';
import { ColumnType } from './litotable/decorators/column.decorator';
import {
  CreateOperationConfig,
  DeleteOperationConfig,
  TableOperation,
  TableOperationConfig,
} from './litotable/configurations/tableCrud.config';
import {
  FinanciacionDetalle,
  generateData,
} from './models/FinanciacionDetalle.model';
import { FinanciacionService } from './services/financiacion.service';

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
  usersTableConfig: TableConfigurations;
  fieldConstrains: FieldConstrianStyle[] = [];
  operations: TableOperationConfig;

  financiacionForm?: Component;

  constructor(
    private usersService: UsersService,
    private financiacionService: FinanciacionService
  ) {
    this.usersTableConfig = {
      hoverStyle: RowStyle.BORDER,
      selectionStyle: RowStyle.SHADOW,
      headerBorders: true,
      paginationSizes: [7, 13, 23],
      actionsColumn: [
        {
          icon: 'edit',
          tooltip: 'editar esta financiacion',
          color: 'green',
          actionResult: {
            willUpdateRow: false,
          },
        },
        {
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

    let createOperation = new CreateOperationConfig([
      { propertyKey: 'firstName', type: ColumnType.STRING },
      { propertyKey: 'lastName', type: ColumnType.STRING },
    ]);
    let deleteOperation = new DeleteOperationConfig();
    this.operations = new TableOperationConfig([
      createOperation,
      deleteOperation,
    ]);
  }

  onFooterButtomClick() {
    console.log('footer action implemented on container component');
  }

  ngOnInit() {
    this.datos = this.financiacionService.getRandom();
    //this.datos = this.usersService.getAll();
  }
}
