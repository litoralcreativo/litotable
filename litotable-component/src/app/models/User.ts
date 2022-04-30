import {
  ColumnContentAlignment,
  ColumnType,
  TableColumn,
} from '../litotable/decorators/column.decorator';

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

  @TableColumn({
    columnName: 'PASS',
    order: 5,
    visible: false,
  })
  pass: string;

  @TableColumn({
    columnName: 'Nacimiento',
    type: ColumnType.DATE,
    format: 'dd/MM/yyyy',
    order: 6,
  })
  bday: Date;

  @TableColumn({
    columnName: 'Salario',
    type: ColumnType.CURRENCY,
    order: 7,
    visible: true,
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
