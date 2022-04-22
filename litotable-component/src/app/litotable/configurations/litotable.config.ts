import { RowStyle } from '../decorators/row.decorator';

export interface TableConfigurations {
  paginationSizes?: number[];
  hoverStyle?: RowStyle;
  selectionStyle?: RowStyle;
}
