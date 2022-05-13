import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { ColumnType } from '../decorators/column.decorator';

export class TableOperationConfig {
  operations: Operation[];
  constructor(operations: Operation[]) {
    this.operations = operations;
  }
}

export interface OperationField {
  propertyKey: string;
  type: ColumnType;
  validators?: any[];
}

class Operation {
  type: TableOperation;
  constructor(type: TableOperation) {
    this.type = type;
  }
}

export class CreateOperationConfig extends Operation {
  fields: OperationField[];
  constructor(fields: OperationField[]) {
    super(TableOperation.CREATE);
    this.fields = fields;
  }
}

export class DeleteOperationConfig extends Operation {
  constructor() {
    super(TableOperation.DELETE);
  }
}

export enum TableOperation {
  CREATE = 1,
  UPDATE = 2,
  DELETE = 3,
  RESTORE = 4,
}
