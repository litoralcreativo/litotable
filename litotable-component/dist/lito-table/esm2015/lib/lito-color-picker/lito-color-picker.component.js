import { Component, EventEmitter, Inject, Input, Output, } from '@angular/core';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { LitotableColor } from '../configurations/litotable.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
export class LitoColorPickerComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.content = 'color';
        this.result = new EventEmitter();
        this.arr = new EventEmitter();
    }
    ngOnInit() { }
    openDialog() {
        const dialogRef = this.dialog.open(DialogColorPicker, {
            width: '380px',
            data: { colors: this.colors, value: this.value, title: this.content },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result)
                this.result.emit(result);
        });
    }
}
LitoColorPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitoColorPickerComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
LitoColorPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LitoColorPickerComponent, selector: "app-lito-color-picker", inputs: { colors: "colors", content: "content" }, outputs: { result: "result", arr: "newColorArray" }, ngImport: i0, template: "<button mat-raised-button (click)=\"openDialog()\">{{ content }}</button>\n", styles: [".colors-container{margin:1.5rem auto 0!important;width:76%;display:grid;grid-template-columns:repeat(10,1fr)}.colors-container>*{justify-self:center;cursor:pointer}\n"], components: [{ type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitoColorPickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-lito-color-picker',
                    templateUrl: './lito-color-picker.component.html',
                    styleUrls: ['./lito-color-picker.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; }, propDecorators: { colors: [{
                type: Input,
                args: ['colors']
            }], content: [{
                type: Input,
                args: ['content']
            }], result: [{
                type: Output,
                args: ['result']
            }], arr: [{
                type: Output,
                args: ['newColorArray']
            }] } });
export class DialogColorPicker {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.value = '';
        this.nc = [0, 0, 0];
        this.newColorString = 'rgb(255, 255, 255)';
        this.fgc = '#222';
        this.mainColors = MAIN_COLORS;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    changeNewColorValue(color, value) {
        switch (color) {
            case 'r':
                this.nc[0] = value;
                break;
            case 'g':
                this.nc[1] = value;
                break;
            case 'b':
                this.nc[2] = value;
                break;
        }
        this.newColorString = `rgb(${this.nc[0]}, ${this.nc[1]},${this.nc[2]})`;
        if (this.nc.reduce((a, c) => a + c) / 3 < 180)
            this.fgc = '#fff';
        else
            this.fgc = '#222';
    }
}
DialogColorPicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogColorPicker, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
DialogColorPicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogColorPicker, selector: "dialog-overview-example-dialog", ngImport: i0, template: "<div mat-dialog-title>\r\n  <span>{{data.title?data.title:'Colors'}}</span>\r\n</div>\r\n<div mat-dialog-content>\r\n  <div class=\"colors-container\" style=\"margin-top: 1rem\">\r\n    <mat-icon\r\n      *ngFor=\"let c of mainColors\"\r\n      [mat-dialog-close]=\"c.value\"\r\n      [style]=\"{\r\n            color: c.value\r\n          }\"\r\n      >circle</mat-icon\r\n    >\r\n    <mat-icon\r\n      *ngFor=\"let c of data.colors\"\r\n      [mat-dialog-close]=\"c.value\"\r\n      matSuffix\r\n      [style]=\"{\r\n                color: c.value\r\n              }\"\r\n      >circle</mat-icon\r\n    >\r\n  </div>\r\n</div>\r\n", styles: [".colors-container{margin:1.5rem auto 0!important;width:76%;display:grid;grid-template-columns:repeat(10,1fr)}.colors-container>*{justify-self:center;cursor:pointer}\n"], components: [{ type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i5.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogColorPicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'dialog-overview-example-dialog',
                    templateUrl: 'dialog-color-picker.html',
                    styleUrls: ['./lito-color-picker.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
export const MAIN_COLORS = [
    new LitotableColor('#000000'),
    new LitotableColor('#434343'),
    new LitotableColor('#666666'),
    new LitotableColor('#999999'),
    new LitotableColor('#b7b7b7'),
    new LitotableColor('#cccccc'),
    new LitotableColor('#d9d9d9'),
    new LitotableColor('#efefef'),
    new LitotableColor('#f3f3f3'),
    new LitotableColor('#ffffff'),
    new LitotableColor('#980000'),
    new LitotableColor('#ff0000'),
    new LitotableColor('#ff9900'),
    new LitotableColor('#ffff00'),
    new LitotableColor('#00ff00'),
    new LitotableColor('#00ffff'),
    new LitotableColor('#4a86e8'),
    new LitotableColor('#0000ff'),
    new LitotableColor('#9900ff'),
    new LitotableColor('#ff00ff'),
    new LitotableColor('#e6b8af'),
    new LitotableColor('#f4cccc'),
    new LitotableColor('#fce5cd'),
    new LitotableColor('#fff2cc'),
    new LitotableColor('#d9ead3'),
    new LitotableColor('#d0e0e3'),
    new LitotableColor('#c9daf8'),
    new LitotableColor('#cfe2f3'),
    new LitotableColor('#d9d2e9'),
    new LitotableColor('#ead1dc'),
    new LitotableColor('#dd7e6b'),
    new LitotableColor('#ea9999'),
    new LitotableColor('#f9cb9c'),
    new LitotableColor('#ffe599'),
    new LitotableColor('#b6d7a8'),
    new LitotableColor('#a2c4c9'),
    new LitotableColor('#a4c2f4'),
    new LitotableColor('#9fc5e8'),
    new LitotableColor('#b4a7d6'),
    new LitotableColor('#d5a6bd'),
    new LitotableColor('#cc4125'),
    new LitotableColor('#e06666'),
    new LitotableColor('#f6b26b'),
    new LitotableColor('#ffd966'),
    new LitotableColor('#93c47d'),
    new LitotableColor('#76a5af'),
    new LitotableColor('#6d9eeb'),
    new LitotableColor('#6fa8dc'),
    new LitotableColor('#8e7cc3'),
    new LitotableColor('#c27ba0'),
    new LitotableColor('#a61c00'),
    new LitotableColor('#cc0000'),
    new LitotableColor('#e69138'),
    new LitotableColor('#f1c232'),
    new LitotableColor('#6aa84f'),
    new LitotableColor('#45818e'),
    new LitotableColor('#3c78d8'),
    new LitotableColor('#3d85c6'),
    new LitotableColor('#674ea7'),
    new LitotableColor('#a64d79'),
    new LitotableColor('#85200c'),
    new LitotableColor('#990000'),
    new LitotableColor('#b45f06'),
    new LitotableColor('#bf9000'),
    new LitotableColor('#38761d'),
    new LitotableColor('#134f5c'),
    new LitotableColor('#1155cc'),
    new LitotableColor('#0b5394'),
    new LitotableColor('#351c75'),
    new LitotableColor('#741b47'),
    new LitotableColor('#5b0f00'),
    new LitotableColor('#660000'),
    new LitotableColor('#783f04'),
    new LitotableColor('#7f6000'),
    new LitotableColor('#274e13'),
    new LitotableColor('#0c343d'),
    new LitotableColor('#1c4587'),
    new LitotableColor('#073763'),
    new LitotableColor('#20124d'),
    new LitotableColor('#4c1130'),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0by1jb2xvci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGl0by10YWJsZS9zcmMvbGliL2xpdG8tY29sb3ItcGlja2VyL2xpdG8tY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpdG8tdGFibGUvc3JjL2xpYi9saXRvLWNvbG9yLXBpY2tlci9saXRvLWNvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpdG8tdGFibGUvc3JjL2xpYi9saXRvLWNvbG9yLXBpY2tlci9kaWFsb2ctY29sb3ItcGlja2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGVBQWUsR0FDaEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7QUFhcEUsTUFBTSxPQUFPLHdCQUF3QjtJQVFuQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBTmxCLFlBQU8sR0FBVyxPQUFPLENBQUM7UUFDMUIsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLFFBQUcsR0FDMUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdrQixDQUFDO0lBRXhDLFFBQVEsS0FBVSxDQUFDO0lBRW5CLFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNwRCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1NBQ3RFLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU07Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzSEFyQlUsd0JBQXdCOzBHQUF4Qix3QkFBd0Isb0tDMUJyQyw2RUFDQTs0RkR5QmEsd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7b0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNqRDtnR0FFa0IsTUFBTTtzQkFBdEIsS0FBSzt1QkFBQyxRQUFRO2dCQUNHLE9BQU87c0JBQXhCLEtBQUs7dUJBQUMsU0FBUztnQkFDRSxNQUFNO3NCQUF2QixNQUFNO3VCQUFDLFFBQVE7Z0JBQ1MsR0FBRztzQkFBM0IsTUFBTTt1QkFBQyxlQUFlOztBQXlCekIsTUFBTSxPQUFPLGlCQUFpQjtJQU01QixZQUNTLFNBQTBDLEVBQ2pCLElBQXFCO1FBRDlDLGNBQVMsR0FBVCxTQUFTLENBQWlDO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBUHZELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBRSxHQUE2QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsbUJBQWMsR0FBRyxvQkFBb0IsQ0FBQztRQUN0QyxRQUFHLEdBQVcsTUFBTSxDQUFDO1FBQ3JCLGVBQVUsR0FBcUIsV0FBVyxDQUFDO0lBSXhDLENBQUM7SUFFSixTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBYSxFQUFFLEtBQVU7UUFDM0MsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3hFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQzs7WUFDNUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7K0dBOUJVLGlCQUFpQiw4Q0FRbEIsZUFBZTttR0FSZCxpQkFBaUIsc0VFdkQ5Qiw0bkJBd0JBOzRGRitCYSxpQkFBaUI7a0JBTDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7aUJBQ2pEOzswQkFTSSxNQUFNOzJCQUFDLGVBQWU7O0FBeUIzQixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQXFCO0lBQzNDLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUU3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFFN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBRTdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUU3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFFN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBRTdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUU3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDN0IsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzdCLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM3QixJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7Q0FDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csXG4gIE1hdERpYWxvZ1JlZixcbiAgTUFUX0RJQUxPR19EQVRBLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTGl0b3RhYmxlQ29sb3IgfSBmcm9tICcuLi9jb25maWd1cmF0aW9ucy9saXRvdGFibGUuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dDb2xvckRhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjb2xvcnM6IExpdG90YWJsZUNvbG9yW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1saXRvLWNvbG9yLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXRvLWNvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpdG8tY29sb3ItcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTGl0b0NvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjb2xvcnMnKSBjb2xvcnM/OiBMaXRvdGFibGVDb2xvcltdO1xuICBASW5wdXQoJ2NvbnRlbnQnKSBjb250ZW50OiBzdHJpbmcgPSAnY29sb3InO1xuICBAT3V0cHV0KCdyZXN1bHQnKSByZXN1bHQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCduZXdDb2xvckFycmF5JykgYXJyOiBFdmVudEVtaXR0ZXI8TGl0b3RhYmxlQ29sb3JbXT4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ29sb3JQaWNrZXIsIHtcbiAgICAgIHdpZHRoOiAnMzgwcHgnLFxuICAgICAgZGF0YTogeyBjb2xvcnM6IHRoaXMuY29sb3JzLCB2YWx1ZTogdGhpcy52YWx1ZSwgdGl0bGU6IHRoaXMuY29udGVudCB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHRoaXMucmVzdWx0LmVtaXQocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1jb2xvci1waWNrZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpdG8tY29sb3ItcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29sb3JQaWNrZXIge1xuICB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIG5jOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBbMCwgMCwgMF07XG4gIG5ld0NvbG9yU3RyaW5nID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gIGZnYzogc3RyaW5nID0gJyMyMjInO1xuICBtYWluQ29sb3JzOiBMaXRvdGFibGVDb2xvcltdID0gTUFJTl9DT0xPUlM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dDb2xvclBpY2tlcj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dDb2xvckRhdGFcbiAgKSB7fVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgY2hhbmdlTmV3Q29sb3JWYWx1ZShjb2xvcjogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgc3dpdGNoIChjb2xvcikge1xuICAgICAgY2FzZSAncic6XG4gICAgICAgIHRoaXMubmNbMF0gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdnJzpcbiAgICAgICAgdGhpcy5uY1sxXSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICB0aGlzLm5jWzJdID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLm5ld0NvbG9yU3RyaW5nID0gYHJnYigke3RoaXMubmNbMF19LCAke3RoaXMubmNbMV19LCR7dGhpcy5uY1syXX0pYDtcbiAgICBpZiAodGhpcy5uYy5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjKSAvIDMgPCAxODApIHRoaXMuZmdjID0gJyNmZmYnO1xuICAgIGVsc2UgdGhpcy5mZ2MgPSAnIzIyMic7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1BSU5fQ09MT1JTOiBMaXRvdGFibGVDb2xvcltdID0gW1xuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyMwMDAwMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjNDM0MzQzJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzY2NjY2NicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM5OTk5OTknKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjYjdiN2I3JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2NjY2NjYycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNkOWQ5ZDknKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjZWZlZmVmJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2YzZjNmMycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmZmZmZmYnKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM5ODAwMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjZmYwMDAwJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2ZmOTkwMCcpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmZmZmMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjMDBmZjAwJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzAwZmZmZicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM0YTg2ZTgnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjMDAwMGZmJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzk5MDBmZicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmZjAwZmYnKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNlNmI4YWYnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjZjRjY2NjJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2ZjZTVjZCcpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmZmYyY2MnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjZDllYWQzJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2QwZTBlMycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNjOWRhZjgnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjY2ZlMmYzJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2Q5ZDJlOScpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNlYWQxZGMnKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNkZDdlNmInKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjZWE5OTk5JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2Y5Y2I5YycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmZmU1OTknKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjYjZkN2E4JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2EyYzRjOScpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNhNGMyZjQnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjOWZjNWU4JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2I0YTdkNicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNkNWE2YmQnKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNjYzQxMjUnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjZTA2NjY2JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2Y2YjI2YicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmZmQ5NjYnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjOTNjNDdkJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzc2YTVhZicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM2ZDllZWInKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjNmZhOGRjJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzhlN2NjMycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNjMjdiYTAnKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNhNjFjMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjY2MwMDAwJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2U2OTEzOCcpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNmMWMyMzInKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjNmFhODRmJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzQ1ODE4ZScpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyMzYzc4ZDgnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjM2Q4NWM2JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzY3NGVhNycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNhNjRkNzknKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM4NTIwMGMnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjOTkwMDAwJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignI2I0NWYwNicpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyNiZjkwMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjMzg3NjFkJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzEzNGY1YycpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyMxMTU1Y2MnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjMGI1Mzk0JyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzM1MWM3NScpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM3NDFiNDcnKSxcblxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM1YjBmMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjNjYwMDAwJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzc4M2YwNCcpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM3ZjYwMDAnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjMjc0ZTEzJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzBjMzQzZCcpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyMxYzQ1ODcnKSxcbiAgbmV3IExpdG90YWJsZUNvbG9yKCcjMDczNzYzJyksXG4gIG5ldyBMaXRvdGFibGVDb2xvcignIzIwMTI0ZCcpLFxuICBuZXcgTGl0b3RhYmxlQ29sb3IoJyM0YzExMzAnKSxcbl07XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj57eyBjb250ZW50IH19PC9idXR0b24+XG4iLCI8ZGl2IG1hdC1kaWFsb2ctdGl0bGU+XHJcbiAgPHNwYW4+e3tkYXRhLnRpdGxlP2RhdGEudGl0bGU6J0NvbG9ycyd9fTwvc3Bhbj5cclxuPC9kaXY+XHJcbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvcnMtY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtXCI+XHJcbiAgICA8bWF0LWljb25cclxuICAgICAgKm5nRm9yPVwibGV0IGMgb2YgbWFpbkNvbG9yc1wiXHJcbiAgICAgIFttYXQtZGlhbG9nLWNsb3NlXT1cImMudmFsdWVcIlxyXG4gICAgICBbc3R5bGVdPVwie1xyXG4gICAgICAgICAgICBjb2xvcjogYy52YWx1ZVxyXG4gICAgICAgICAgfVwiXHJcbiAgICAgID5jaXJjbGU8L21hdC1pY29uXHJcbiAgICA+XHJcbiAgICA8bWF0LWljb25cclxuICAgICAgKm5nRm9yPVwibGV0IGMgb2YgZGF0YS5jb2xvcnNcIlxyXG4gICAgICBbbWF0LWRpYWxvZy1jbG9zZV09XCJjLnZhbHVlXCJcclxuICAgICAgbWF0U3VmZml4XHJcbiAgICAgIFtzdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYy52YWx1ZVxyXG4gICAgICAgICAgICAgIH1cIlxyXG4gICAgICA+Y2lyY2xlPC9tYXQtaWNvblxyXG4gICAgPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19