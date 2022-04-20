import 'reflect-metadata';
export interface TableColumnMetadata {
  visible?: boolean;
  order?: number;
  columnName?: string;
  type?: ColumnType;
  format?: string;
  contentAlign?: ColumnContentAlignment;
}

export function TableColumn(columnMetadata: TableColumnMetadata) {
  return (target: Object, propertyKey: string) => {
    const prevData = Reflect.getMetadata('columnsMetadata', target);
    const newData = {
      propertyKey: propertyKey,
      metadata: columnMetadata,
    };
    let data = [];
    if (prevData != undefined) {
      data.push(...prevData);
    }
    data.push(newData);
    Reflect.defineMetadata('columnsMetadata', data, target);
  };
}

export enum ColumnType {
  STRING = 0,
  INTEGER = 1,
  FLOAT = 2,
  DATE = 3,
  CURRENCY = 4,
  CUIT = 5,
}

export enum ColumnContentAlignment {
  LEFT = 1,
  CENTER = 2,
  RIGHT = 3,
}