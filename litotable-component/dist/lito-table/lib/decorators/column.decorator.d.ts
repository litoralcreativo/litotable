import 'reflect-metadata';
export interface TableColumnMetadata {
    visible?: boolean;
    order: number;
    columnName?: string;
    type?: ColumnType;
    enumTypeAsociation?: {
        key: string | boolean | number;
        icon: string;
        tooltip: string;
    }[];
    format?: string;
    contentAlign?: ColumnContentAlignment;
    columnGroup?: ColumnGroup;
}
export interface ColumnGroup {
    name: string;
}
export declare function TableColumn(columnMetadata: TableColumnMetadata): (target: Object, propertyKey: string) => void;
export declare enum ColumnType {
    STRING = 0,
    INTEGER = 1,
    FLOAT = 2,
    DATE = 3,
    CURRENCY = 4,
    CUIT = 5,
    PHONE = 6,
    ENUM = 7
}
export declare enum ColumnContentAlignment {
    LEFT = 1,
    CENTER = 2,
    RIGHT = 3
}
