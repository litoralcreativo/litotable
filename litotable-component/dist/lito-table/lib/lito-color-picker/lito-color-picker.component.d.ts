import { EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LitotableColor } from '../configurations/litotable.config';
import * as i0 from "@angular/core";
export interface DialogColorData {
    title: string;
    value: string;
    colors: LitotableColor[];
}
export declare class LitoColorPickerComponent implements OnInit {
    dialog: MatDialog;
    colors?: LitotableColor[];
    content: string;
    result: EventEmitter<string>;
    arr: EventEmitter<LitotableColor[]>;
    value?: string;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LitoColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LitoColorPickerComponent, "app-lito-color-picker", never, { "colors": "colors"; "content": "content"; }, { "result": "result"; "arr": "newColorArray"; }, never, never>;
}
export declare class DialogColorPicker {
    dialogRef: MatDialogRef<DialogColorPicker>;
    data: DialogColorData;
    value: string;
    nc: [number, number, number];
    newColorString: string;
    fgc: string;
    mainColors: LitotableColor[];
    constructor(dialogRef: MatDialogRef<DialogColorPicker>, data: DialogColorData);
    onNoClick(): void;
    changeNewColorValue(color: string, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogColorPicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogColorPicker, "dialog-overview-example-dialog", never, {}, {}, never, never>;
}
export declare const MAIN_COLORS: LitotableColor[];
