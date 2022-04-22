import {
  ColumnContentAlignment,
  ColumnType,
  TableColumn,
} from '../litotable/decorators/column.decorator';
import { TableRowStyle } from '../litotable/decorators/row.decorator';

export class User {
  @TableColumn({
    columnName: 'Nombre',
    order: 1,
    contentAlign: ColumnContentAlignment.LEFT,
  })
  firstName: string;

  @TableColumn({
    columnName: 'Apellido',
    order: 2,
  })
  lastName: string;

  @TableColumn({
    columnName: 'Telefono',
    type: ColumnType.PHONE,
    format: '(###) ####-####',
    order: 3,
  })
  phone: number;

  @TableColumn({
    columnName: 'Usuario',
    order: 4,
  })
  username: string;

  @TableRowStyle({
    enable: false,
    style: {
      'background-color': 'rgb(200, 150, 150, 0.5)',
    },
    trigger: (e: string) => {
      if (e.length <= 10) return true;
      else return false;
    },
  })
  @TableRowStyle({
    enable: false,
    style: {
      'background-color': 'rgb(150, 200, 150, 0.5)',
    },
    trigger: (e: string) => {
      if (e.length > 10) return true;
      else return false;
    },
  })
  @TableColumn({
    columnName: 'PASS',
    order: 5,
  })
  pass: string;

  @TableColumn({
    columnName: 'Nacimiento',
    type: ColumnType.DATE,
    format: 'dd/MM/yyyy',
    order: 6,
    visible: false,
  })
  bday: Date;

  @TableRowStyle({
    enable: true,
    style: {
      'background-color': 'rgb(200, 120, 200, 0.5)',
      color: 'rgba(255, 255, 255, 0.9)',
      'font-weight': 200,
    },
    trigger: (e: number) => {
      if (e < 100000) return true;
      else return false;
    },
  })
  @TableColumn({
    columnName: 'Salario',
    type: ColumnType.CURRENCY,
    order: 7,
    visible: false,
  })
  salary: number;

  @TableColumn({
    columnName: 'CUIT',
    type: ColumnType.CUIT,
    order: 8,
    visible: false,
  })
  cuit: string;

  constructor(
    fName?: string,
    lName?: string,
    uname?: string,
    pass?: string,
    phone?: number,
    bday?: string,
    salary?: number,
    cuit?: string
  ) {
    this.bday = bday ? new Date(bday) : new Date();
    this.firstName = fName || '';
    this.lastName = lName || '';
    this.pass = pass || '';
    this.phone = phone || -1;
    this.username = uname || '';
    this.salary = salary || -1;
    this.cuit = cuit || '';
  }
}
