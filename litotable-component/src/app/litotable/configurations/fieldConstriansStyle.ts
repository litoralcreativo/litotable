import { ColumnType } from '../decorators/column.decorator';

export interface FieldConstrianStyle {
  propertyKey: string;
  constrainName: string;
  type: ColumnType;
  constrain: Constrain;
  metadata: {
    enable: boolean;
    trigger: (e: any) => boolean;
    style: Object;
  };
}

export interface Constrain {
  style: any;
  enable: boolean;
  trigger: (e: any) => boolean;
}

export class NumberConstrain implements Constrain {
  style: Object;
  enable: boolean;
  type: NumberConstrainType;
  values: [number, number];
  constructor(
    type: NumberConstrainType,
    values: [number, number],
    style: Object = {},
    enable: boolean = true
  ) {
    this.type = type;
    this.values = values;
    this.style = style;
    this.enable = enable;
  }
  trigger = (e: any): boolean => {
    switch (this.type) {
      case NumberConstrainType.LESSTHAN: {
        if (e < this.values[0]) return true;
        else return false;
        break;
      }
      case NumberConstrainType.MORETHAN: {
        if (e > this.values[0]) return true;
        else return false;
        break;
      }
      case NumberConstrainType.EQUALS: {
        if (e == this.values[0]) return true;
        else return false;
        break;
      }
      case NumberConstrainType.BETWEEN: {
        if (this.values.length == 2)
          if (e > this.values[0] && e < this.values[1]) return true;
          else return false;
        break;
      }
    }
    return false;
  };
}

export enum NumberConstrainType {
  EQUALS = 1,
  MORETHAN = 2,
  LESSTHAN = 3,
  BETWEEN = 4,
}
