export class LitotableColor {
  value: string;
  constructor(
    value: [number, number, number] | [number, number, number, number] | string
  ) {
    this.value = '';
    if (typeof value == 'string') {
      this.value = value;
    } else {
      if (value.length == 3) {
        this.value = `rgb(${value[0]}, ${value[1]}, ${value[2]})`;
      } else if (value.length == 4) {
        this.value = `rgb(${value[0]}, ${value[1]}, ${value[2]}, ${value[3]})`;
      }
    }
  }
}
export interface TableConfigurations {
  paginationSizes?: number[];
  hoverStyle?: RowStyle;
  selectionStyle?: RowStyle;
  rowStyleColors?: LitotableColor[];
  headerBorders?: boolean;
  cellBorders?: boolean;
}

export enum RowStyle {
  BORDER = 1,
  SHADOW = 2,
}
