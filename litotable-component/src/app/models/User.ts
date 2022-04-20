import {
  ColumnContentAlignment,
  ColumnType,
  TableColumn,
} from '../litotable/decorators/column.decorator';
import { TableRowConstrain } from '../litotable/decorators/row.decorator';

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
    order: 3,
  })
  phone: number;

  @TableColumn({
    columnName: 'Usuario',
    order: 4,
  })
  username: string;

  @TableRowConstrain({
    enable: false,
    style: {
      'background-color': 'rgb(200, 150, 150, 0.5)',
    },
    trigger: (e: string) => {
      if (e.length <= 10) return true;
      else return false;
    },
  })
  @TableRowConstrain({
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

  /* @TableRowConstrain({
    enable: true,
    style: { filter: 'brightness(1.2) contrast(0.9)' },
    trigger: (e: number) => {
      if (e < 60000) return true;
      else return false;
    },
  }) */
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
