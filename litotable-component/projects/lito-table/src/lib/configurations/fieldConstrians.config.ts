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
  /* metadata: {
    enable: boolean;
    trigger: (e: any) => boolean;
    style: Object;
  }; */
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
export class DateConstrain implements Constrain {
  style: Object;
  enable: boolean;
  values: [Date, Date];
  type: MesurableConstrainType;
  constructor(
    type: MesurableConstrainType,
    values: [Date, Date],
    style: Object = {},
    enable: boolean = true
  ) {
    this.type = type;
    this.values = values;
    this.style = style;
    this.enable = enable;
  }
  trigger = (e: Date): boolean => {
    switch (this.type) {
      case MesurableConstrainType.LESSTHAN: {
        if (e < this.values[0]) return true;
        else return false;
        break;
      }
      case MesurableConstrainType.MORETHAN: {
        if (e > this.values[0]) return true;
        else return false;
        break;
      }
      case MesurableConstrainType.EQUALS: {
        if (e == this.values[0]) return true;
        else return false;
        break;
      }
      case MesurableConstrainType.BETWEEN: {
        if (this.values.length == 2)
          if (e > this.values[0] && e < this.values[1]) return true;
          else return false;
        break;
      }
      case MesurableConstrainType.NOTBETWEEN: {
        if (this.values.length == 2)
          if (!(e > this.values[0] && e < this.values[1])) return true;
          else return false;
        break;
      }
    }
    return false;
  };
}

/**
 * This class is for numbers constrains (integer, float, decimal, etc..)
 */
export class NumberConstrain implements Constrain {
  style: Object;
  enable: boolean;
  values: [number, number];
  type: MesurableConstrainType;
  constructor(
    type: MesurableConstrainType,
    values: [number, number],
    style: Object = {},
    enable: boolean = true
  ) {
    this.type = type;
    this.values = values;
    this.style = style;
    this.enable = enable;
  }
  trigger = (e: number): boolean => {
    switch (this.type) {
      case MesurableConstrainType.LESSTHAN: {
        if (e < this.values[0]) return true;
        else return false;
        break;
      }
      case MesurableConstrainType.MORETHAN: {
        if (e > this.values[0]) return true;
        else return false;
        break;
      }
      case MesurableConstrainType.EQUALS: {
        if (e == this.values[0]) return true;
        else return false;
        break;
      }
      case MesurableConstrainType.BETWEEN: {
        if (this.values.length == 2)
          if (e > this.values[0] && e < this.values[1]) return true;
          else return false;
        break;
      }
      case MesurableConstrainType.NOTBETWEEN: {
        if (this.values.length == 2)
          if (!(e > this.values[0] && e < this.values[1])) return true;
          else return false;
        break;
      }
    }
    return false;
  };
}

/**
 * This class is for string constrains
 */
export class StringConstrain implements Constrain {
  style: Object;
  enable: boolean;
  constrainArray: StringConstrainObject[] = [];
  caseSensitive: boolean;
  constructor(
    style: Object = {},
    enable: boolean = true,
    caseSense: boolean = true
  ) {
    this.style = style;
    this.enable = enable;
    this.caseSensitive = caseSense;
  }
  trigger = (e: string): boolean => {
    e = e.toString();
    let result = true;
    for (let i = 0; i < this.constrainArray.length; i++) {
      const con = this.constrainArray[i];
      switch (con.type) {
        case StringConstrainType.STARTSWITH: {
          if (
            !(this.caseSensitive
              ? e.startsWith(con.value)
              : e.toLocaleLowerCase().startsWith(con.value.toLocaleLowerCase()))
          )
            result = false;
          break;
        }
        case StringConstrainType.ENDWITH: {
          if (
            !(this.caseSensitive
              ? e.endsWith(con.value)
              : e.toLocaleLowerCase().endsWith(con.value.toLocaleLowerCase()))
          )
            result = false;
          break;
        }
        case StringConstrainType.CONTAINS: {
          if (
            !(this.caseSensitive
              ? e.includes(con.value)
              : e.toLocaleLowerCase().includes(con.value.toLocaleLowerCase()))
          )
            result = false;
          break;
        }
      }
      if (!result) break;
    }
    return result;
  };
  addConstrain(stringConstrain: StringConstrainObject) {
    this.constrainArray.push(stringConstrain);
  }
  clearConstrains() {
    this.constrainArray = [];
  }
}

export enum MesurableConstrainType {
  EQUALS = 1,
  MORETHAN = 2,
  LESSTHAN = 3,
  BETWEEN = 4,
  NOTBETWEEN = 5,
}

export interface StringConstrainObject {
  type: StringConstrainType;
  value: string;
}

export enum StringConstrainType {
  STARTSWITH = 1,
  ENDWITH = 2,
  CONTAINS = 3,
}
