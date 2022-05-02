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
  type: MesurableConstrainType;
}

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
  trigger = (e: any): boolean => {
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
    }
    return false;
  };
}

export enum MesurableConstrainType {
  EQUALS = 1,
  MORETHAN = 2,
  LESSTHAN = 3,
  BETWEEN = 4,
  NOTBETWEEN = 5,
}
