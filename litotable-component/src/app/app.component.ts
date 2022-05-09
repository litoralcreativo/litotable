import { Component, OnInit, Type } from '@angular/core';
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
  type: FinanciacionDetalle = new FinanciacionDetalle();
  usersTableConfig: TableConfigurations;
  fieldConstrains: FieldConstrianStyle[] = [];
  operations: TableOperationConfig;

  constructor(
    private usersService: UsersService,
    private financiacionService: FinanciacionService
  ) {
    this.usersTableConfig = {
      hoverStyle: RowStyle.BORDER,
      selectionStyle: RowStyle.SHADOW,
      headerBorders: true,
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

  ngOnInit() {
    this.datos = this.financiacionService.getRandom();
  }
}
