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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  datos!: Observable<User[]>;
  type: User = new User();
  usersTableConfig: TableConfigurations;
  fieldConstrains: FieldConstrianStyle[] = [];
  operations: TableOperationConfig;

  constructor(private usersService: UsersService) {
    this.usersTableConfig = {
      paginationSizes: [7, 11, 23, 51],
      hoverStyle: RowStyle.BORDER,
      selectionStyle: RowStyle.SHADOW,
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
    this.datos = this.usersService.getAll();
  }
}
