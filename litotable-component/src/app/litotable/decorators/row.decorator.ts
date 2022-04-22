import 'reflect-metadata';
export interface TableRowMetadata<T> {
  enable: boolean;
  trigger: (e: any) => boolean;
  style: Object;
}

export function TableRowStyle(rowMetadata: TableRowMetadata<Object>) {
  return (target: Object, propertyKey: string) => {
    const prevData = Reflect.getMetadata('rowStyle', target);
    const newData = {
      propertyKey: propertyKey,
      metadata: rowMetadata,
    };
    let data = [];
    if (prevData != undefined) {
      data.push(...prevData);
    }
    data.push(newData);
    Reflect.defineMetadata('rowStyle', data, target);
  };
}

export enum RowStyle {
  BORDER = 1,
  SHADOW = 2,
}
