import { ColumnType } from '../decorators/column.decorator';
/**
 * This interface is for configuration
 *
 */
export interface FieldConstrianStyle {
    propertyKey: string;
    constrainName: string;
    type: ColumnType;
    constrain: Constrain;
}
/**
 * This interface is for every Constrain
 */
export interface Constrain {
    style: any;
    enable: boolean;
    trigger: (e: any) => boolean;
}
/**
 * This class is for date constrains
 */
export declare class DateConstrain implements Constrain {
    style: Object;
    enable: boolean;
    values: [Date, Date];
    type: MesurableConstrainType;
    constructor(type: MesurableConstrainType, values: [Date, Date], style?: Object, enable?: boolean);
    trigger: (e: Date) => boolean;
}
/**
 * This class is for numbers constrains (integer, float, decimal, etc..)
 */
export declare class NumberConstrain implements Constrain {
    style: Object;
    enable: boolean;
    values: [number, number];
    type: MesurableConstrainType;
    constructor(type: MesurableConstrainType, values: [number, number], style?: Object, enable?: boolean);
    trigger: (e: number) => boolean;
}
/**
 * This class is for string constrains
 */
export declare class StringConstrain implements Constrain {
    style: Object;
    enable: boolean;
    constrainArray: StringConstrainObject[];
    caseSensitive: boolean;
    constructor(style?: Object, enable?: boolean, caseSense?: boolean);
    trigger: (e: string) => boolean;
    addConstrain(stringConstrain: StringConstrainObject): void;
    clearConstrains(): void;
}
export declare enum MesurableConstrainType {
    EQUALS = 1,
    MORETHAN = 2,
    LESSTHAN = 3,
    BETWEEN = 4,
    NOTBETWEEN = 5
}
export interface StringConstrainObject {
    type: StringConstrainType;
    value: string;
}
export declare enum StringConstrainType {
    STARTSWITH = 1,
    ENDWITH = 2,
    CONTAINS = 3
}
