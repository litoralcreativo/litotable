import {
  ColumnContentAlignment,
  ColumnType,
} from './decorators/column.decorator';

export class Column {
  propertyKey: string;
  visible?: boolean;
  order: number;
  name: string;
  type: ColumnType;
  format?: string;
  contentAlign?: ColumnContentAlignment;
  enumTypeAsociation?: {
    key: string | boolean | number;
    icon: string;
    tooltip: string;
  }[];
  mutable?: boolean;
  mutableAction?: (object: any) => any;
  constructor(
    propertyKey: string,
    name: string,
    type: ColumnType,
    order: number
  ) {
    this.propertyKey = propertyKey;
    this.name = name;
    this.type = type;
    this.order = order;
  }
}
