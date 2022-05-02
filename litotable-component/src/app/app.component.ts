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
      rowStyleColors: [
        new LitotableColor('#000000'),
        new LitotableColor('#444444'),
        new LitotableColor('#888888'),
        new LitotableColor('#cccccc'),
        new LitotableColor('#eeeeee'),
        new LitotableColor('#442B48'),
        new LitotableColor('#726e60'),
        new LitotableColor('#98B06F'),
        new LitotableColor('#B6DC76'),
        new LitotableColor('#D6FC96'),
        new LitotableColor('#0051b5'),
        new LitotableColor('#aa51b5'),
      ],
    };

    let constrain1 = new NumberConstrain(
      MesurableConstrainType.BETWEEN,
      [80000, 120000],
      {
        'background-color': '#0051b5',
        color: '#ffffffcc',
      },
      true
    );
    let constrain2 = new NumberConstrain(
      MesurableConstrainType.BETWEEN,
      [120000, 140000],
      {
        'background-color': '#aa51b5',
        color: '#ffffffcc',
      },
      true
    );

    let fc1: FieldConstrianStyle = {
      propertyKey: 'salary',
      constrainName: 'Salario 01',
      type: ColumnType.FLOAT,
      constrain: constrain1,
      metadata: {
        enable: true,
        style: {
          'background-color': '#0051b5',
          color: 'rgba(255, 255, 255, 0.9)',
          'font-weight': 200,
        },
        trigger: (e: number) => {
          if (e < 100000) return true;
          else return false;
        },
      },
    };
    let fc2: FieldConstrianStyle = {
      propertyKey: 'salary',
      constrainName: 'Salario 02',
      type: ColumnType.FLOAT,
      constrain: constrain2,
      metadata: {
        enable: true,
        style: {
          'background-color': '#0051b5',
          color: 'rgba(255, 255, 255, 0.9)',
          'font-weight': 200,
        },
        trigger: (e: number) => {
          if (e < 100000) return true;
          else return false;
        },
      },
    };

    this.fieldConstrains.push(fc1);
    this.fieldConstrains.push(fc2);
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
