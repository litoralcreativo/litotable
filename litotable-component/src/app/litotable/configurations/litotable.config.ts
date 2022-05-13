import { Component, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface LitoFooterAction {
  icon?: string;
  content?: string;
  color?: string;
  actionResult: {
    willAddRow: boolean;
    actionObservable?: Observable<any>;
    nonObservableAction?: () => any;
  };
  template?: Component;
}

export interface LitoRowAction {
  tooltip: string;
  icon: string;
  color: string;
  actionResult: {
    willUpdateRow?: boolean;
    willDeleteRow?: boolean;
    actionObservable?: Observable<any>;
  };
  confirmation?: LitoRowActionConfirmation;
}
export interface LitoRowActionConfirmation {
  title: string;
  content: string;
}
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
  actionsColumn?: LitoRowAction[];
  footerAction?: LitoFooterAction;
}

export enum RowStyle {
  BORDER = 1,
  SHADOW = 2,
}
