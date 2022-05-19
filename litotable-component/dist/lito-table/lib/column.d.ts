import { ColumnContentAlignment, ColumnType } from './decorators/column.decorator';
export declare class Column {
    propertyKey: string;
    visible?: boolean;
    order: number;
    name: string;
    type: ColumnType;
    format?: string;
    contentAlign?: ColumnContentAlignment;
    mutable?: boolean;
    mutableAction?: (object: any) => any;
    constructor(propertyKey: string, name: string, type: ColumnType, order: number);
}
