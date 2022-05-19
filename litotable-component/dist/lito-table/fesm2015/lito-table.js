import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, Inject, ViewChild, Pipe, NgModule } from '@angular/core';
import * as i9 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i8$1 from '@angular/material/sort';
import { MatSort, MatSortModule } from '@angular/material/sort';
import * as i6$1 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import 'reflect-metadata';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as i5$1 from '@angular/material/sidenav';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import * as i1$1 from '@angular/cdk/a11y';
import * as i8 from '@angular/material/expansion';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i7$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i10$1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i11 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i12$1 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i13 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i2$1 from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3$1 from '@angular/material/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import * as i5 from '@angular/material/form-field';
import * as i6 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i7 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i19 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i10 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i12 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i15 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i16 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i15$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

class Column {
    constructor(propertyKey, name, type, order) {
        this.propertyKey = propertyKey;
        this.name = name;
        this.type = type;
        this.order = order;
    }
}

/**
 * This class is for date constrains
 */
class DateConstrain {
    constructor(type, values, style = {}, enable = true) {
        this.trigger = (e) => {
            switch (this.type) {
                case MesurableConstrainType.LESSTHAN: {
                    if (e < this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.MORETHAN: {
                    if (e > this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.EQUALS: {
                    if (e == this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.BETWEEN: {
                    if (this.values.length == 2)
                        if (e > this.values[0] && e < this.values[1])
                            return true;
                        else
                            return false;
                    break;
                }
                case MesurableConstrainType.NOTBETWEEN: {
                    if (this.values.length == 2)
                        if (!(e > this.values[0] && e < this.values[1]))
                            return true;
                        else
                            return false;
                    break;
                }
            }
            return false;
        };
        this.type = type;
        this.values = values;
        this.style = style;
        this.enable = enable;
    }
}
/**
 * This class is for numbers constrains (integer, float, decimal, etc..)
 */
class NumberConstrain {
    constructor(type, values, style = {}, enable = true) {
        this.trigger = (e) => {
            switch (this.type) {
                case MesurableConstrainType.LESSTHAN: {
                    if (e < this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.MORETHAN: {
                    if (e > this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.EQUALS: {
                    if (e == this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.BETWEEN: {
                    if (this.values.length == 2)
                        if (e > this.values[0] && e < this.values[1])
                            return true;
                        else
                            return false;
                    break;
                }
                case MesurableConstrainType.NOTBETWEEN: {
                    if (this.values.length == 2)
                        if (!(e > this.values[0] && e < this.values[1]))
                            return true;
                        else
                            return false;
                    break;
                }
            }
            return false;
        };
        this.type = type;
        this.values = values;
        this.style = style;
        this.enable = enable;
    }
}
/**
 * This class is for string constrains
 */
class StringConstrain {
    constructor(style = {}, enable = true, caseSense = true) {
        this.constrainArray = [];
        this.trigger = (e) => {
            e = e.toString();
            let result = true;
            for (let i = 0; i < this.constrainArray.length; i++) {
                const con = this.constrainArray[i];
                switch (con.type) {
                    case StringConstrainType.STARTSWITH: {
                        if (!(this.caseSensitive
                            ? e.startsWith(con.value)
                            : e.toLocaleLowerCase().startsWith(con.value.toLocaleLowerCase())))
                            result = false;
                        break;
                    }
                    case StringConstrainType.ENDWITH: {
                        if (!(this.caseSensitive
                            ? e.endsWith(con.value)
                            : e.toLocaleLowerCase().endsWith(con.value.toLocaleLowerCase())))
                            result = false;
                        break;
                    }
                    case StringConstrainType.CONTAINS: {
                        if (!(this.caseSensitive
                            ? e.includes(con.value)
                            : e.toLocaleLowerCase().includes(con.value.toLocaleLowerCase())))
                            result = false;
                        break;
                    }
                }
                if (!result)
                    break;
            }
            return result;
        };
        this.style = style;
        this.enable = enable;
        this.caseSensitive = caseSense;
    }
    addConstrain(stringConstrain) {
        this.constrainArray.push(stringConstrain);
    }
    clearConstrains() {
        this.constrainArray = [];
    }
}
var MesurableConstrainType;
(function (MesurableConstrainType) {
    MesurableConstrainType[MesurableConstrainType["EQUALS"] = 1] = "EQUALS";
    MesurableConstrainType[MesurableConstrainType["MORETHAN"] = 2] = "MORETHAN";
    MesurableConstrainType[MesurableConstrainType["LESSTHAN"] = 3] = "LESSTHAN";
    MesurableConstrainType[MesurableConstrainType["BETWEEN"] = 4] = "BETWEEN";
    MesurableConstrainType[MesurableConstrainType["NOTBETWEEN"] = 5] = "NOTBETWEEN";
})(MesurableConstrainType || (MesurableConstrainType = {}));
var StringConstrainType;
(function (StringConstrainType) {
    StringConstrainType[StringConstrainType["STARTSWITH"] = 1] = "STARTSWITH";
    StringConstrainType[StringConstrainType["ENDWITH"] = 2] = "ENDWITH";
    StringConstrainType[StringConstrainType["CONTAINS"] = 3] = "CONTAINS";
})(StringConstrainType || (StringConstrainType = {}));

class LitotableColor {
    constructor(value) {
        this.value = '';
        if (typeof value == 'string') {
            this.value = value;
        }
        else {
            if (value.length == 3) {
                this.value = `rgb(${value[0]}, ${value[1]}, ${value[2]})`;
            }
            else if (value.length == 4) {
                this.value = `rgb(${value[0]}, ${value[1]}, ${value[2]}, ${value[3]})`;
            }
        }
    }
}
var RowStyle;
(function (RowStyle) {
    RowStyle[RowStyle["BORDER"] = 1] = "BORDER";
    RowStyle[RowStyle["SHADOW"] = 2] = "SHADOW";
})(RowStyle || (RowStyle = {}));
class TableActionsConfig {
    constructor(actions) {
        this.actions = actions;
    }
    updatePermormableState(set) {
        this.actions.forEach((a) => {
            a.performable = a.updatePerformable(set);
        });
    }
}
var GeneralActionScope;
(function (GeneralActionScope) {
    GeneralActionScope[GeneralActionScope["SINGLE"] = 1] = "SINGLE";
    GeneralActionScope[GeneralActionScope["MULTIPLE"] = 2] = "MULTIPLE";
})(GeneralActionScope || (GeneralActionScope = {}));
var TableOperation;
(function (TableOperation) {
    TableOperation[TableOperation["CREATE"] = 1] = "CREATE";
    TableOperation[TableOperation["UPDATE"] = 2] = "UPDATE";
    TableOperation[TableOperation["DELETE"] = 3] = "DELETE";
    TableOperation[TableOperation["RESTORE"] = 4] = "RESTORE";
})(TableOperation || (TableOperation = {}));

function TableColumn(columnMetadata) {
    return (target, propertyKey) => {
        const prevData = Reflect.getMetadata('columnsMetadata', target);
        const newData = {
            propertyKey: propertyKey,
            metadata: columnMetadata,
        };
        let data = [];
        if (prevData != undefined) {
            data.push(...prevData);
        }
        data.push(newData);
        Reflect.defineMetadata('columnsMetadata', data, target);
    };
}
var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["STRING"] = 0] = "STRING";
    ColumnType[ColumnType["INTEGER"] = 1] = "INTEGER";
    ColumnType[ColumnType["FLOAT"] = 2] = "FLOAT";
    ColumnType[ColumnType["DATE"] = 3] = "DATE";
    ColumnType[ColumnType["CURRENCY"] = 4] = "CURRENCY";
    ColumnType[ColumnType["CUIT"] = 5] = "CUIT";
    ColumnType[ColumnType["PHONE"] = 6] = "PHONE";
})(ColumnType || (ColumnType = {}));
var ColumnContentAlignment;
(function (ColumnContentAlignment) {
    ColumnContentAlignment[ColumnContentAlignment["LEFT"] = 1] = "LEFT";
    ColumnContentAlignment[ColumnContentAlignment["CENTER"] = 2] = "CENTER";
    ColumnContentAlignment[ColumnContentAlignment["RIGHT"] = 3] = "RIGHT";
})(ColumnContentAlignment || (ColumnContentAlignment = {}));

class LitoColorPickerComponent {
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
class DialogColorPicker {
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
DialogColorPicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogColorPicker, selector: "dialog-overview-example-dialog", ngImport: i0, template: "<div mat-dialog-title>\r\n  <span>{{data.title?data.title:'Colors'}}</span>\r\n</div>\r\n<div mat-dialog-content>\r\n  <div class=\"colors-container\" style=\"margin-top: 1rem\">\r\n    <mat-icon\r\n      *ngFor=\"let c of mainColors\"\r\n      [mat-dialog-close]=\"c.value\"\r\n      [style]=\"{\r\n            color: c.value\r\n          }\"\r\n      >circle</mat-icon\r\n    >\r\n    <mat-icon\r\n      *ngFor=\"let c of data.colors\"\r\n      [mat-dialog-close]=\"c.value\"\r\n      matSuffix\r\n      [style]=\"{\r\n                color: c.value\r\n              }\"\r\n      >circle</mat-icon\r\n    >\r\n  </div>\r\n</div>\r\n", styles: [".colors-container{margin:1.5rem auto 0!important;width:76%;display:grid;grid-template-columns:repeat(10,1fr)}.colors-container>*{justify-self:center;cursor:pointer}\n"], components: [{ type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i19.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i5.MatSuffix, selector: "[matSuffix]" }] });
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
const MAIN_COLORS = [
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

class ConstrainCreationFormData {
    constructor() {
        this.columns = [];
    }
}
class ConstrainCreatorComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.columns = [];
        this.result = new EventEmitter();
    }
    ngOnInit() { }
    openDialog() {
        const dialogRef = this.dialog.open(ConstrainCreationForm, {
            data: { columns: this.columns },
            maxHeight: '80vh',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result)
                this.result.emit(result);
        });
    }
}
ConstrainCreatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConstrainCreatorComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ConstrainCreatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ConstrainCreatorComponent, selector: "litotable-constrain-creator", inputs: { columns: "columns" }, outputs: { result: "result-constrain" }, ngImport: i0, template: "<div (click)=\"openDialog()\">\n  <ng-content></ng-content>\n</div>\n", styles: [".constrain-mat-content-dual{display:flex;width:100%;justify-content:space-between;margin-bottom:1rem}.number-constrain-selector{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:1rem}.number-constrain-selector>*{flex-grow:1}.flex-center{display:flex;justify-content:center;align-items:center}.mat-dialog-content{max-height:initial}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConstrainCreatorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'litotable-constrain-creator',
                    templateUrl: './constrain-creator.component.html',
                    styleUrls: ['./constrain-creator.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; }, propDecorators: { columns: [{
                type: Input,
                args: ['columns']
            }], result: [{
                type: Output,
                args: ['result-constrain']
            }] } });
class ConstrainCreationForm {
    constructor(dialogRef, data, _formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.numberConstrainType = MesurableConstrainType;
        this.stringConstrainType = StringConstrainType;
        this.finalString = '';
        this.valueType = '';
        this.dateRange = new FormGroup({
            start: new FormControl(),
            end: new FormControl(),
        });
    }
    ngOnInit() {
        this.fieldFormGroup = this._formBuilder.group({
            field: ['', Validators.required],
        });
        this.stringFormGroup = this._formBuilder.group({
            startWith: [''],
            startWithToogle: [''],
            includes: [''],
            includesToogle: [''],
            endsWith: [''],
            endsWithToogle: [''],
        });
        this.resetValues();
        this.getFinalText();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onFieldSelectorChange(selected) {
        this.resetValues();
        if (selected) {
            this.fieldConstrain.propertyKey = selected.propertyKey;
            this.fieldConstrain.constrainName = selected.name;
            this.fieldConstrain.type = selected.type;
            switch (selected.type) {
                case ColumnType.DATE:
                    this.fieldConstrain.constrain = new DateConstrain(this.numberConstrainType.MORETHAN, [new Date(), new Date()], {
                        color: '#eee',
                        'background-color': '#888',
                    });
                    break;
                case ColumnType.STRING:
                case ColumnType.PHONE:
                case ColumnType.CUIT:
                    this.fieldConstrain.constrain = new StringConstrain({
                        color: '#eee',
                        'background-color': '#888',
                    });
                    break;
            }
        }
        this.getFinalText();
    }
    changeConstrainStyle(value, field) {
        if (field && field != '') {
            this.fieldConstrain.constrain.style[field] = value;
        }
    }
    changeConstrainState(value, field) {
        switch (field) {
            case 'date-type':
            case 'number-type':
                this.fieldConstrain.constrain.type = parseFloat(value.value);
                break;
            case 'number-value':
            case 'number-value1':
                this.fieldConstrain.constrain.values[0] = parseFloat(value.target.value);
                break;
            case 'number-value2':
                this.fieldConstrain.constrain.values[1] = parseFloat(value.target.value);
                break;
            case 'date-value':
            case 'date-value1':
                this.fieldConstrain.constrain.values[0] = new Date(value.value);
                break;
            case 'date-value2':
                this.fieldConstrain.constrain.values[1] = new Date(value.value);
                break;
        }
        this.getFinalText();
    }
    getFinalText() {
        this.finalString = '';
        switch (this.fieldConstrain.type) {
            case ColumnType.INTEGER:
            case ColumnType.FLOAT:
            case ColumnType.FLOAT:
                this.valueType = 'value';
                this.finalString = `that is `;
                break;
            case ColumnType.DATE:
                this.valueType = 'date';
                break;
            case ColumnType.STRING:
            case ColumnType.PHONE:
            case ColumnType.CUIT:
                this.valueType = 'string';
                this.finalString = `that `;
                break;
            default:
                this.valueType = 'value';
                break;
        }
        switch (this.fieldConstrain.type) {
            case ColumnType.INTEGER:
            case ColumnType.FLOAT:
            case ColumnType.CURRENCY:
                switch (this.fieldConstrain.constrain.type) {
                    case MesurableConstrainType.EQUALS:
                        this.finalString += `equal to ${this.fieldConstrain.constrain.values[0]}`;
                        break;
                    case MesurableConstrainType.MORETHAN:
                        this.finalString += `more than ${this.fieldConstrain.constrain.values[0]}`;
                        break;
                    case MesurableConstrainType.LESSTHAN:
                        this.finalString += `less than ${this.fieldConstrain.constrain.values[0]}`;
                        break;
                    case MesurableConstrainType.BETWEEN:
                        this.finalString += `between ${this.fieldConstrain.constrain.values[0]} and ${this.fieldConstrain.constrain.values[1]}`;
                        break;
                    case MesurableConstrainType.NOTBETWEEN:
                        this.finalString += `not between ${this.fieldConstrain.constrain.values[0]} and ${this.fieldConstrain.constrain.values[1]}`;
                        break;
                }
                break;
            case ColumnType.DATE:
                switch (this.fieldConstrain.constrain.type) {
                    case MesurableConstrainType.EQUALS:
                        this.finalString += `equal to ${this.shortDate(this.fieldConstrain.constrain.values[0])}`;
                        break;
                    case MesurableConstrainType.MORETHAN:
                        this.finalString += `after ${this.shortDate(this.fieldConstrain.constrain.values[0])}`;
                        break;
                    case MesurableConstrainType.LESSTHAN:
                        this.finalString += `before ${this.shortDate(this.fieldConstrain.constrain.values[0])}`;
                        break;
                    case MesurableConstrainType.BETWEEN:
                        this.finalString += `between ${this.shortDate(this.fieldConstrain.constrain.values[0])} and ${this.shortDate(this.fieldConstrain.constrain.values[1])}`;
                        break;
                    case MesurableConstrainType.NOTBETWEEN:
                        this.finalString += `not between ${this.shortDate(this.fieldConstrain.constrain.values[0])} and ${this.shortDate(this.fieldConstrain.constrain.values[1])}`;
                        break;
                }
                break;
            case ColumnType.STRING:
            case ColumnType.CUIT:
            case ColumnType.PHONE:
                for (let i = 0; i < this.fieldConstrain.constrain.constrainArray.length; i++) {
                    const strConstr = this.fieldConstrain.constrain.constrainArray[i];
                    switch (strConstr.type) {
                        case StringConstrainType.STARTSWITH:
                            this.finalString += `starts width ${strConstr.value}`;
                            break;
                        case StringConstrainType.CONTAINS:
                            this.finalString += `contains ${strConstr.value}`;
                            break;
                        case StringConstrainType.ENDWITH:
                            this.finalString += `ends width ${strConstr.value}`;
                            break;
                    }
                    if (this.fieldConstrain.constrain.constrainArray.length > 1) {
                        if (i < this.fieldConstrain.constrain.constrainArray.length - 2)
                            this.finalString += ', ';
                        if (i == this.fieldConstrain.constrain.constrainArray.length - 2)
                            this.finalString += ' and ';
                    }
                }
                break;
        }
    }
    shortDate(str) {
        return new Date(str).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }
    resetValues() {
        this.stringFormGroup.reset();
        this.fieldConstrain = {
            propertyKey: this.data.columns[0].propertyKey,
            constrainName: 'New Constrain',
            type: ColumnType.INTEGER,
            constrain: new NumberConstrain(this.numberConstrainType.MORETHAN, [0, 0], {
                color: '#eee',
                'background-color': '#888',
            }),
            metadata: {
                enable: true,
                trigger: (e) => false,
                style: {},
            },
        };
        if (this.strAccordion)
            this.strAccordion.closeAll();
    }
    updateStringConstrain() {
        let values = this.stringFormGroup.value;
        this.fieldConstrain.constrain.clearConstrains();
        if (values.startWithToogle && values.startWith)
            this.fieldConstrain.constrain.addConstrain({
                type: StringConstrainType.STARTSWITH,
                value: values.startWith,
            });
        if (values.includesToogle && values.includes)
            this.fieldConstrain.constrain.addConstrain({
                type: StringConstrainType.CONTAINS,
                value: values.includes,
            });
        if (values.endsWithToogle && values.endsWith)
            this.fieldConstrain.constrain.addConstrain({
                type: StringConstrainType.ENDWITH,
                value: values.endsWith,
            });
        this.getFinalText();
    }
    closeDialog() {
        this.dialogRef.close(this.fieldConstrain);
        console.log(this.fieldConstrain.constrain);
    }
}
ConstrainCreationForm.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConstrainCreationForm, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
ConstrainCreationForm.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ConstrainCreationForm, selector: "constrain-creation-form-dialog", viewQueries: [{ propertyName: "strAccordion", first: true, predicate: MatAccordion, descendants: true }], ngImport: i0, template: "<div mat-dialog-content>\r\n  <mat-stepper [linear]=\"true\" #stepper orientation=\"vertical\">\r\n    <!-- Field step -->\r\n    <mat-step [stepControl]=\"fieldFormGroup\">\r\n      <div style=\"margin-top: 1rem\"></div>\r\n      <ng-template matStepLabel>Select a field</ng-template>\r\n      <ng-container *ngTemplateOutlet=\"constrainNameSelector\"></ng-container>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <!-- Style step -->\r\n    <mat-step>\r\n      <div style=\"margin-top: 1rem\"></div>\r\n      <ng-template matStepLabel>Aply style</ng-template>\r\n      <ng-container *ngTemplateOutlet=\"constrainCreationStyle\"></ng-container>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <!-- Constrain step -->\r\n    <mat-step>\r\n      <div style=\"margin-top: 1rem\"></div>\r\n      <ng-template matStepLabel>Set constrain</ng-template>\r\n      <ng-container [ngSwitch]=\"fieldConstrain.type\">\r\n        <!-- Numericos -->\r\n        <ng-container\r\n          *ngSwitchCase=\"1\"\r\n          [ngTemplateOutlet]=\"numberConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"2\"\r\n          [ngTemplateOutlet]=\"numberConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"4\"\r\n          [ngTemplateOutlet]=\"numberConstrainSelector\"\r\n        ></ng-container>\r\n\r\n        <!-- Date -->\r\n        <ng-container\r\n          *ngSwitchCase=\"3\"\r\n          [ngTemplateOutlet]=\"dateConstrainSelector\"\r\n        ></ng-container>\r\n        <!-- String -->\r\n        <ng-container\r\n          *ngSwitchCase=\"0\"\r\n          [ngTemplateOutlet]=\"stringConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"5\"\r\n          [ngTemplateOutlet]=\"stringConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"6\"\r\n          [ngTemplateOutlet]=\"stringConstrainSelector\"\r\n        ></ng-container>\r\n      </ng-container>\r\n\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <!-- Final step -->\r\n    <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      <div style=\"width: 350px\">\r\n        <p\r\n          class=\"mat-elevation-z4\"\r\n          [style]=\"{\r\n            color: fieldConstrain.constrain.style['color'],\r\n            'background-color':\r\n              fieldConstrain.constrain.style['background-color'],\r\n            padding: '1rem',\r\n            'border-radius': '4px'\r\n          }\"\r\n        >\r\n          Every {{ valueType }} from column\r\n          <strong>{{ fieldConstrain.constrainName }}</strong>\r\n          {{ finalString }}\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset(); resetValues()\">\r\n          Reset\r\n        </button>\r\n        <button mat-button (click)=\"closeDialog()\">Create</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-stepper>\r\n</div>\r\n\r\n<ng-template #constrainNameSelector>\r\n  <form [formGroup]=\"fieldFormGroup\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Field</mat-label>\r\n      <mat-select\r\n        formControlName=\"field\"\r\n        required\r\n        (ngModelChange)=\"onFieldSelectorChange($event)\"\r\n      >\r\n        <mat-option>None</mat-option>\r\n        <mat-option *ngFor=\"let column of data.columns\" [value]=\"column\">{{\r\n          column.name\r\n        }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #constrainCreationStyle>\r\n  <mat-expansion-panel\r\n    hideToggle\r\n    [style]=\"{\r\n      'background-color': fieldConstrain.constrain.style['background-color'],\r\n      'margin-bottom': '1rem'\r\n    }\"\r\n  >\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title\r\n        [style]=\"{\r\n          color: fieldConstrain.constrain.style['color'],\r\n          'justify-content': 'center'\r\n        }\"\r\n        >{{ fieldConstrain.constrainName }}</mat-panel-title\r\n      >\r\n    </mat-expansion-panel-header>\r\n    <div class=\"flex-center\">\r\n      <app-lito-color-picker\r\n        (result)=\"changeConstrainStyle($event, 'background-color')\"\r\n        content=\"Background\"\r\n      ></app-lito-color-picker>\r\n      <app-lito-color-picker\r\n        style=\"margin-left: 1rem\"\r\n        (result)=\"changeConstrainStyle($event, 'color')\"\r\n        content=\"Foreground\"\r\n      ></app-lito-color-picker>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</ng-template>\r\n\r\n<ng-template #numberConstrainSelector>\r\n  <mat-button-toggle-group\r\n    class=\"number-constrain-selector\"\r\n    name=\"constrainSelect\"\r\n    aria-label=\"Constrain select\"\r\n    value=\"{{ fieldConstrain.constrain.type }}\"\r\n    (change)=\"changeConstrainState($event, 'number-type')\"\r\n  >\r\n    <mat-button-toggle value=\"1\" matTooltip=\"EQUALS\">\r\n      <mat-icon>drag_handle</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"2\" matTooltip=\"MORE THAN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"3\" matTooltip=\"LESS THAN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_more</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"4\" matTooltip=\"BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"5\" matTooltip=\"NOT BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_more</mat-icon>\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <div\r\n    *ngIf=\"\r\n      fieldConstrain.constrain.type != numberConstrainType.BETWEEN &&\r\n      fieldConstrain.constrain.type != numberConstrainType.NOTBETWEEN\r\n    \"\r\n    style=\"display: flex; justify-content: space-between\"\r\n  >\r\n    <mat-form-field style=\"width: 100%\" appearance=\"fill\">\r\n      <mat-label\r\n        (click)=\"$event.stopPropagation()\"\r\n        [ngSwitch]=\"fieldConstrain.constrain.type\"\r\n      >\r\n        <span *ngSwitchCase=\"numberConstrainType.EQUALS\">EQUALS</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.LESSTHAN\">LESS THAN</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.MORETHAN\">MORE THAN</span>\r\n      </mat-label>\r\n      <input\r\n        type=\"number\"\r\n        step=\"0.1\"\r\n        (change)=\"\r\n          $event.stopPropagation(); changeConstrainState($event, 'number-value')\r\n        \"\r\n        (keyup)=\"\r\n          $event.stopPropagation(); changeConstrainState($event, 'number-value')\r\n        \"\r\n        matInput\r\n        placeholder=\"\"\r\n        value=\"{{ fieldConstrain.constrain.values[0] }}\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- BETWEEN -->\r\n  <div\r\n    *ngIf=\"\r\n      fieldConstrain.constrain.type == numberConstrainType.BETWEEN ||\r\n      fieldConstrain.constrain.type == numberConstrainType.NOTBETWEEN\r\n    \"\r\n    style=\"max-width: fit-content; display: flow-root\"\r\n  >\r\n    <mat-form-field style=\"max-width: 45%; float: left\" appearance=\"fill\">\r\n      <mat-label (click)=\"$event.stopPropagation()\">{{\r\n        fieldConstrain.constrain.type == numberConstrainType.BETWEEN\r\n          ? \"MORE THAN\"\r\n          : \"LESS THAN\"\r\n      }}</mat-label>\r\n      <input\r\n        type=\"number\"\r\n        step=\"100\"\r\n        (change)=\"changeConstrainState($event, 'number-value1')\"\r\n        (keyup)=\"changeConstrainState($event, 'number-value1')\"\r\n        matInput\r\n        placeholder=\"\"\r\n        [max]=\"fieldConstrain.constrain.values[1]\"\r\n        value=\"{{ fieldConstrain.constrain.values[0] }}\"\r\n      />\r\n    </mat-form-field>\r\n    <mat-form-field\r\n      style=\"max-width: 45%; float: right\"\r\n      appearance=\"fill\"\r\n      (click)=\"$event.stopPropagation()\"\r\n      (keypress)=\"$event.stopPropagation()\"\r\n      (keydown)=\"$event.stopPropagation()\"\r\n    >\r\n      <mat-label\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keypress)=\"$event.stopPropagation()\"\r\n      >\r\n        {{\r\n          fieldConstrain.constrain.type == numberConstrainType.BETWEEN\r\n            ? \"LESS THAN\"\r\n            : \"MORE THAN\"\r\n        }}\r\n      </mat-label>\r\n      <input\r\n        type=\"number\"\r\n        step=\"100\"\r\n        (change)=\"changeConstrainState($event, 'number-value2')\"\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keydown)=\"$event.stopPropagation()\"\r\n        (keypress)=\"$event.stopPropagation()\"\r\n        (keyup)=\"changeConstrainState($event, 'number-value2')\"\r\n        matInput\r\n        placeholder=\"\"\r\n        [min]=\"fieldConstrain.constrain.values[0]\"\r\n        value=\"{{ fieldConstrain.constrain.values[1] }}\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #dateConstrainSelector>\r\n  <mat-button-toggle-group\r\n    class=\"number-constrain-selector\"\r\n    name=\"constrainSelect\"\r\n    aria-label=\"Constrain select\"\r\n    value=\"{{ fieldConstrain.constrain.type }}\"\r\n    (change)=\"changeConstrainState($event, 'date-type')\"\r\n  >\r\n    <!-- <mat-button-toggle value=\"1\" matTooltip=\"EQUALS\">\r\n      <mat-icon>drag_handle</mat-icon>\r\n    </mat-button-toggle> -->\r\n    <mat-button-toggle value=\"2\" matTooltip=\"AFTER\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"3\" matTooltip=\"BEFORE\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_more</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"4\" matTooltip=\"BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"5\" matTooltip=\"NOT BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_more</mat-icon>\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <div style=\"display: flex; justify-content: space-between\">\r\n    <!-- EQUALS, LESSTHAN, MORETHAN -->\r\n    <mat-form-field\r\n      style=\"width: 100%\"\r\n      appearance=\"fill\"\r\n      *ngIf=\"\r\n        fieldConstrain.constrain.type == numberConstrainType.EQUALS ||\r\n        fieldConstrain.constrain.type == numberConstrainType.LESSTHAN ||\r\n        fieldConstrain.constrain.type == numberConstrainType.MORETHAN\r\n      \"\r\n    >\r\n      <mat-label [ngSwitch]=\"fieldConstrain.constrain.type\">\r\n        <span *ngSwitchCase=\"numberConstrainType.EQUALS\">EQUALS</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.LESSTHAN\">Choose a date</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.MORETHAN\">Choose a date</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.BETWEEN\"\r\n          >Choose a date range</span\r\n        >\r\n        <span *ngSwitchCase=\"numberConstrainType.NOTBETWEEN\"\r\n          >Choose a date range</span\r\n        >\r\n      </mat-label>\r\n\r\n      <input\r\n        matInput\r\n        [matDatepicker]=\"picker\"\r\n        (dateChange)=\"changeConstrainState($event, 'date-value')\"\r\n      />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <!-- BETWEEN, NOTBETWEEN -->\r\n    <mat-form-field\r\n      style=\"width: 100%\"\r\n      appearance=\"fill\"\r\n      *ngIf=\"\r\n        fieldConstrain.constrain.type == numberConstrainType.BETWEEN ||\r\n        fieldConstrain.constrain.type == numberConstrainType.NOTBETWEEN\r\n      \"\r\n    >\r\n      <mat-date-range-input [formGroup]=\"dateRange\" [rangePicker]=\"rangePicker\">\r\n        <input\r\n          matStartDate\r\n          formControlName=\"start\"\r\n          placeholder=\"{{ numberConstrainType.BETWEEN ? 'After' : 'Bafore' }}\"\r\n          (dateChange)=\"changeConstrainState($event, 'date-value1')\"\r\n        />\r\n        <input\r\n          matEndDate\r\n          formControlName=\"end\"\r\n          placeholder=\"{{ numberConstrainType.BETWEEN ? 'Before' : 'After' }}\"\r\n          (dateChange)=\"changeConstrainState($event, 'date-value2')\"\r\n        />\r\n      </mat-date-range-input>\r\n      <mat-datepicker-toggle\r\n        matSuffix\r\n        [for]=\"rangePicker\"\r\n      ></mat-datepicker-toggle>\r\n      <mat-date-range-picker #rangePicker></mat-date-range-picker>\r\n    </mat-form-field>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #stringConstrainSelector>\r\n  <mat-accordion>\r\n    <mat-expansion-panel hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon *ngIf=\"swEnable.checked\" color=\"accent\">\r\n            radio_button_checked\r\n          </mat-icon>\r\n          <mat-icon *ngIf=\"!swEnable.checked\" style=\"color: gray\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <span class=\"flex-center\">&nbsp;Starts with</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"flex-center\">{{ swInput.value }}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"stringFormGroup\" (change)=\"updateStringConstrain()\">\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Value</mat-label>\r\n          <input\r\n            matInput\r\n            autocomplete=\"off\"\r\n            #swInput\r\n            formControlName=\"startWith\"\r\n          />\r\n        </mat-form-field>\r\n        <mat-slide-toggle\r\n          (change)=\"updateStringConstrain()\"\r\n          #swEnable\r\n          style=\"margin-left: 1rem\"\r\n          formControlName=\"startWithToogle\"\r\n        ></mat-slide-toggle>\r\n      </form>\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon *ngIf=\"siEnable.checked\" color=\"accent\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <mat-icon *ngIf=\"!siEnable.checked\" style=\"color: gray\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <span class=\"flex-center\">&nbsp;Includes</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"flex-center\">{{ siInput.value }}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"stringFormGroup\" (change)=\"updateStringConstrain()\">\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Value</mat-label>\r\n          <input\r\n            matInput\r\n            autocomplete=\"off\"\r\n            #siInput\r\n            formControlName=\"includes\"\r\n          />\r\n        </mat-form-field>\r\n        <mat-slide-toggle\r\n          (change)=\"updateStringConstrain()\"\r\n          #siEnable\r\n          style=\"margin-left: 1rem\"\r\n          formControlName=\"includesToogle\"\r\n        ></mat-slide-toggle>\r\n      </form>\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel hideToggle style=\"margin-bottom: 1rem\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon *ngIf=\"ewEnable.checked\" color=\"accent\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <mat-icon *ngIf=\"!ewEnable.checked\" style=\"color: gray\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <span class=\"flex-center\">&nbsp;Ends with</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"flex-center\">{{ ewInput.value }}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"stringFormGroup\" (change)=\"updateStringConstrain()\">\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Value</mat-label>\r\n          <input\r\n            matInput\r\n            autocomplete=\"off\"\r\n            #ewInput\r\n            formControlName=\"endsWith\"\r\n          />\r\n        </mat-form-field>\r\n        <mat-slide-toggle\r\n          (change)=\"updateStringConstrain()\"\r\n          #ewEnable\r\n          style=\"margin-left: 1rem\"\r\n          formControlName=\"endsWithToogle\"\r\n        ></mat-slide-toggle>\r\n      </form>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ng-template>\r\n", styles: [".constrain-mat-content-dual{display:flex;width:100%;justify-content:space-between;margin-bottom:1rem}.number-constrain-selector{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:1rem}.number-constrain-selector>*{flex-grow:1}.flex-center{display:flex;justify-content:center;align-items:center}.mat-dialog-content{max-height:initial}\n"], components: [{ type: i3$1.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "labelPosition", "disableRipple", "color"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { type: i3$1.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i5.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i7.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i8.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i8.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: LitoColorPickerComponent, selector: "app-lito-color-picker", inputs: ["colors", "content"], outputs: ["result", "newColorArray"] }, { type: i10.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i12.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i12.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i12.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["separator", "comparisonStart", "comparisonEnd", "rangePicker", "required", "dateFilter", "min", "max", "disabled"], exportAs: ["matDateRangeInput"] }, { type: i12.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { type: i13.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], directives: [{ type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3$1.MatStepLabel, selector: "[matStepLabel]" }, { type: i19.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3$1.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { type: i3$1.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { type: i19.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i19.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.MatLabel, selector: "mat-label" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i19.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i10.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i15.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i19.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i16.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i12.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i5.MatSuffix, selector: "[matSuffix]" }, { type: i12.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i12.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i8.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i8.MatExpansionPanelDescription, selector: "mat-panel-description" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConstrainCreationForm, decorators: [{
            type: Component,
            args: [{
                    selector: 'constrain-creation-form-dialog',
                    templateUrl: 'constrain-form.component.html',
                    styleUrls: ['./constrain-creator.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: ConstrainCreationFormData, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2$1.FormBuilder }]; }, propDecorators: { strAccordion: [{
                type: ViewChild,
                args: [MatAccordion]
            }] } });

class CuitPipe {
    transform(value, separador = '.') {
        let result = value.toString().split('');
        result = [
            ...result.slice(0, 2),
            separador,
            ...result.slice(2, 10),
            separador,
            ...result.slice(10),
        ];
        return result.join('');
    }
}
CuitPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CuitPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CuitPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CuitPipe, name: "cuit" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CuitPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'cuit' }]
        }] });

class PhonePipe {
    transform(value, format) {
        // format style: "(###) ####-####"
        if (format) {
            let result = value.toString().split('');
            let _format = Array.from(format);
            for (let i = _format.length - 1; i >= 0; i--) {
                if (_format[i] == '#') {
                    const temp = result.pop();
                    if (temp) {
                        _format[i] = temp;
                    }
                    else {
                        _format[i] = '0';
                    }
                }
            }
            result = _format;
            return result.join('');
        }
        return value.toString();
    }
}
PhonePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PhonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PhonePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PhonePipe, name: "phone" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PhonePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'phone' }]
        }] });

class LitotableComponent {
    constructor(_liveAnnouncer) {
        this._liveAnnouncer = _liveAnnouncer;
        /* Enums */
        this.columnTypes = ColumnType;
        this.operationTypes = TableOperation;
        this.columns = [];
        this.numberConstrainType = MesurableConstrainType;
        this.displayedColumns = new DisplayedColumns();
        this.rowConstrains = [];
        this.dataSource = new MatTableDataSource();
        this.fetching = false;
        this.selectedRows = new Set();
        this.constrainedRows = new Set();
        this.showSelectedOnly = false;
        this.creationFormOpen = false;
        this._confirmation = 'multiple';
        this.fieldConstrians = [];
        this.multipleActionOutput = new EventEmitter();
        this.singleActionOutput = new EventEmitter();
    }
    ngOnInit() {
        this.setColumns();
        if (this.inputSource != undefined) {
            this.fetching = true;
            this.inputSource.subscribe((datos) => {
                var _a;
                this.fetching = false;
                this.dataSource = new MatTableDataSource(datos);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.setRowsConstrains(datos);
                (_a = this.tableActionsConfig) === null || _a === void 0 ? void 0 : _a.updatePermormableState(this.selectedRows);
            });
        }
        else {
            let c = [];
            this.dataSource = new MatTableDataSource(c);
        }
        this.dataSource.paginator = this.paginator;
    }
    parseDate(input) {
        return input.toJSON();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    announceSortChange(sortState) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
    updateFieldsToRowsConstrains() {
        if (this.fieldConstrians) {
            this.rowConstrains = this.fieldConstrians.map((x) => {
                return new RowConstrain(x.propertyKey, x.constrain);
            });
        }
    }
    setRowsConstrains(source) {
        this.updateFieldsToRowsConstrains();
        source.forEach((element) => {
            this.rowConstrains.forEach((rc) => {
                const value = element[rc.name];
                if (rc._constrain.trigger(value)) {
                    if (rc._constrain.enable) {
                        if (!element['rowStyle']) {
                            Object.defineProperty(element, 'rowStyle', {
                                configurable: true,
                                enumerable: false,
                                value: { style: rc._constrain.style },
                                writable: true,
                            });
                        }
                        else if (element['rowStyle']) {
                            element['rowStyle'].style = Object.assign(Object.assign({}, element['rowStyle'].style), rc._constrain.style);
                        }
                        this.constrainedRows.add(element);
                    }
                }
            });
        });
    }
    updateRowConstrains() {
        this.constrainedRows = new Set();
        const source = this.dataSource.data;
        source.forEach((element) => {
            this.rowConstrains.forEach((rc) => {
                const value = element[rc.name];
                if (rc._constrain.trigger(value)) {
                    if (rc._constrain.enable) {
                        if (!element['rowStyle']) {
                            Object.defineProperty(element, 'rowStyle', {
                                configurable: true,
                                enumerable: false,
                                value: { style: rc._constrain.style },
                                writable: true,
                            });
                        }
                        else if (element['rowStyle']) {
                            element['rowStyle'].style = Object.assign(Object.assign({}, element['rowStyle'].style), rc._constrain.style);
                        }
                        this.constrainedRows.add(element);
                    }
                }
            });
        });
    }
    hasConstrain(propertyKey, value) {
        let result = false;
        if (this.rowConstrains.length != 0) {
        }
        return result;
    }
    setColumns() {
        var _a;
        const columnsMetadata = Reflect.getMetadata('columnsMetadata', this.dataType);
        let columnGroups = new ColumnGroups(0);
        if (columnsMetadata != undefined) {
            this.columns = columnsMetadata.map((c, i) => {
                var _a;
                let column = new Column(c.propertyKey, c.propertyKey, ColumnType.STRING, c.metadata.order);
                column.visible =
                    c.metadata.visible == undefined ? true : c.metadata.visible;
                column.name = c.metadata.columnName || c.propertyKey;
                column.type = c.metadata.type || ColumnType.STRING;
                column.format = c.metadata.format || undefined;
                column.contentAlign = c.metadata.contentAlign || undefined;
                const str = (_a = c.metadata.columnGroup) === null || _a === void 0 ? void 0 : _a.name;
                if (str) {
                    if (columnGroups.groupColumns.filter((x) => x.name == str).length == 0) {
                        let newColGroup = new GroupColumn(str);
                        newColGroup.addColumn(column);
                        columnGroups.groupColumns.push(newColGroup);
                    }
                    else {
                        columnGroups.groupColumns
                            .filter((x) => x.name == str)[0]
                            .addColumn(column);
                    }
                }
                return column;
            });
            this.columns.sort((a, b) => {
                return a.order - b.order;
            });
        }
        this.displayedColumns = new DisplayedColumns(this.columns, this.selection, ((_a = this.tableConfigurations) === null || _a === void 0 ? void 0 : _a.actionsColumn) != undefined);
        this.displayedColumns.columnGroups = columnGroups;
        this.displayedColumns.updateGroups();
    }
    isAllSelected() {
        const numSelected = this.selectedRows.size;
        const numRows = this.dataSource.data.length;
        return numSelected == numRows && numRows != 0;
    }
    masterToggle() {
        this.isAllSelected()
            ? this.selectedRows.clear()
            : this.dataSource.data.forEach((row) => this.selectedRows.add(row));
    }
    selectionToogle(state, row) {
        var _a;
        if (state) {
            this.selectedRows.add(row);
        }
        else {
            if (this.selectedRows.has(row))
                this.selectedRows.delete(row);
        }
        if ((_a = this.tableActionsConfig) === null || _a === void 0 ? void 0 : _a.actions) {
            this.tableActionsConfig.updatePermormableState(this.selectedRows);
        }
    }
    changeConstrainState(value, data, field, isStyle = true) {
        if (isStyle && field && field != '') {
            data.style[field] = value;
        }
        if (!isStyle) {
            switch (field) {
                case 'number-type':
                    data.type = parseInt(value.value);
                    break;
                case 'number-value':
                case 'number-value1':
                    data.values[0] = parseInt(value.target.value);
                    break;
                case 'number-value2':
                    data.values[1] = parseInt(value.target.value);
                    break;
            }
        }
        this.updateRowConstrains();
    }
    addConstrain($event) {
        this.fieldConstrians.push($event);
        this.updateFieldsToRowsConstrains();
        this.updateRowConstrains();
    }
    updateVisibility() {
        this.updateFieldsToRowsConstrains();
        this.updateRowConstrains();
    }
    removeConstrain(constrain) {
        this.fieldConstrians = this.fieldConstrians.filter((x) => x != constrain);
        this.updateVisibility();
    }
    tableDrop(event) {
        moveItemInArray(this.displayedColumns.columnNames, event.previousIndex + 1, event.currentIndex + 1);
    }
    onRowActionClick(row, action) {
        if (action.actionResult.willUpdateRow ||
            action.actionResult.willDeleteRow) {
            row.processing = true;
            this.singleActionOutput.emit({
                operation: action,
                data: row,
            });
        }
    }
    updateRow(row, newRow) {
        let indx = this.dataSource.data.indexOf(row);
        if (newRow) {
            this.dataSource.data[indx] = newRow;
            this.dataSource.data[indx].processing = false;
            this.selectedRows.delete(this.dataSource.data[indx]);
        }
        else {
            this.dataSource.data.splice(indx, 1);
            row.processing = false;
        }
        this.selectedRows.delete(row);
        this.dataSource._updateChangeSubscription();
        this.updateVisibility();
    }
    performFooterAction() {
        var _a, _b, _c, _d;
        if ((_b = (_a = this.tableConfigurations) === null || _a === void 0 ? void 0 : _a.footerAction) === null || _b === void 0 ? void 0 : _b.actionResult.nonObservableAction) {
            (_d = (_c = this.tableConfigurations) === null || _c === void 0 ? void 0 : _c.footerAction) === null || _d === void 0 ? void 0 : _d.actionResult.nonObservableAction();
        }
    }
    performRowActionConfirmation(action, row, confirmation) {
        this._confirmation = 'single';
        this.rowConfirmation = {
            confirmationData: confirmation,
            row: row,
            action: action,
        };
        if (this.drawer) {
            this.drawer.open();
        }
    }
    onGeneralActionClick(operation) {
        this.performGeneralAction(operation);
    }
    performGeneralAction(operation) {
        this.multipleActionOutput.emit({
            operation: operation,
            data: this.selectedRows,
        });
        if (operation.mustLockRows) {
            this.lockSelectedRows(this.selectedRows);
        }
    }
    unLockRow(row) {
        row.processing = false;
    }
    lockSelectedRows(rows) {
        rows.forEach((row) => {
            row.processing = true;
        });
    }
    unLockSelectedRows(rows) {
        rows.forEach((row) => {
            row.processing = false;
        });
    }
    performGeneralActionConfirmation(operation) {
        this._confirmation = 'multiple';
        this.generalConfirmation = {
            confirmationData: operation.confirmation,
            action: operation,
        };
        if (this.drawer) {
            this.drawer.open();
        }
    }
}
LitotableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitotableComponent, deps: [{ token: i1$1.LiveAnnouncer }], target: i0.ɵɵFactoryTarget.Component });
LitotableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LitotableComponent, selector: "lito-table", inputs: { inputSource: ["source", "inputSource"], dataType: ["type", "dataType"], tableActionsConfig: "tableActionsConfig", selection: "selection", tableConfigurations: ["configurations", "tableConfigurations"], fieldConstrians: "fieldConstrians" }, outputs: { multipleActionOutput: "multipleActionOutput", singleActionOutput: "singleActionOutput" }, viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }, { propertyName: "drawer", first: true, predicate: MatDrawer, descendants: true }], ngImport: i0, template: "<!-- Operations -->\n<mat-accordion class=\"table-operations\">\n  <mat-expansion-panel hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title style=\"align-items: center\">\n        Operaciones\n      </mat-panel-title>\n      <div class=\"table-top-container\">\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"export\"\n          aria-label=\"Exportar\"\n          (click)=\"$event.stopPropagation()\"\n        >\n          <mat-icon>download</mat-icon>\n        </button>\n\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"columns\"\n          aria-label=\"Columnas\"\n          (click)=\"$event.stopPropagation()\"\n        >\n          <mat-icon>view_column</mat-icon>\n        </button>\n\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"constrains\"\n          aria-label=\"Constrains\"\n          (click)=\"$event.stopPropagation()\"\n        >\n          <mat-icon>brush</mat-icon>\n        </button>\n      </div>\n    </mat-expansion-panel-header>\n    <div class=\"operation-buttons-container\" *ngIf=\"tableActionsConfig\">\n      <div *ngFor=\"let operation of tableActionsConfig.actions\">\n        <div class=\"table-bottom-container\">\n          <!-- (selectedRows.size == 0 && operation.mustHaveOneSelected) ||\n              (selectedRows.size != 1 && operation.scope == 1) -->\n          <div\n            [matTooltipDisabled]=\"operation.performable.state\"\n            matTooltip=\"{{ operation.performable.tooltip }}\"\n          >\n            <button\n              [disabled]=\"!operation.performable.state\"\n              mat-stroked-button\n              class=\"general-action\"\n              (click)=\"\n                operation.confirmation\n                  ? performGeneralActionConfirmation(operation)\n                  : performGeneralAction(operation)\n              \"\n            >\n              <mat-icon\n                *ngIf=\"operation?.icon\"\n                [ngStyle]=\"{\n                  color:\n                    (!operation.performable.state\n                      ? 'gray'\n                      : operation?.color) || 'currentColor'\n                }\"\n                >{{ operation.icon }}</mat-icon\n              >\n              {{ operation.content }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n\n<!-- Table -->\n<div class=\"litotable-main-container\">\n  <div class=\"litotable-container mat-elevation-z4\">\n    <div class=\"table-container\">\n      <mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\">\n        <mat-drawer #drawer mode=\"over\" position=\"end\">\n          <ng-container *ngTemplateOutlet=\"sidenavMenu\"></ng-container>\n        </mat-drawer>\n        <mat-drawer-content>\n          <div *ngIf=\"dataSource\" class=\"table-responsive\">\n            <table\n              mat-table\n              [dataSource]=\"dataSource\"\n              matSort\n              (matSortChange)=\"announceSortChange($event)\"\n            >\n              <!-- Columna de seleccion -->\n              <ng-container matColumnDef=\"selection\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox\n                    (change)=\"masterToggle()\"\n                    [indeterminate]=\"\n                      this.selectedRows.size != 0 && !isAllSelected()\n                    \"\n                    [checked]=\"isAllSelected()\"\n                  >\n                  </mat-checkbox>\n                </th>\n                <td\n                  mat-cell\n                  *matCellDef=\"let row\"\n                  style=\"background-color: rgba(255, 255, 255, 1)\"\n                >\n                  <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"selectionToogle($event.checked, row)\"\n                    [checked]=\"selectedRows.has(row)\"\n                    [disabled]=\"row.processing\"\n                  >\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n\n              <!-- Resto de columnas -->\n              <ng-container\n                *ngFor=\"let column of displayedColumns.columns\"\n                matColumnDef=\"{{ column.name }}\"\n              >\n                <!-- Column Header -->\n                <th\n                  mat-header-cell\n                  *matHeaderCellDef\n                  mat-sort-header=\"{{ column.propertyKey }}\"\n                  sortActionDescription=\"Sort by {{ column.propertyKey }}\"\n                  [class.header-borders]=\"tableConfigurations?.headerBorders\"\n                >\n                  {{ column.name }}\n                </th>\n                <!-- Column Data -->\n                <td\n                  mat-cell\n                  *matCellDef=\"let element\"\n                  #litotableTd\n                  [class.cell-borders]=\"tableConfigurations?.headerBorders\"\n                >\n                  <div\n                    #content\n                    style=\"transition: 0.3s all\"\n                    [ngStyle]=\"\n                      litotableTd.parentElement?.style?.color\n                        ? { color: litotableTd.parentElement?.style?.color }\n                        : {}\n                    \"\n                  >\n                    <div *ngIf=\"column.type == columnTypes.STRING\">\n                      {{ element[column.propertyKey] }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.INTEGER\">\n                      {{ element[column.propertyKey] | number: \"1.0-0\" }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.FLOAT\">\n                      {{ element[column.propertyKey] | number: \"1.2-4\" }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.DATE\">\n                      {{\n                        element[column.propertyKey]\n                          | date: (column.format ? column.format : \"short\")\n                      }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.CURRENCY\">\n                      {{ element[column.propertyKey] | currency }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.CUIT\">\n                      {{ element[column.propertyKey] | cuit: \"-\" }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.PHONE\">\n                      {{\n                        element[column.propertyKey]\n                          | phone: (column.format ? column.format : undefined)\n                      }}\n                    </div>\n                  </div>\n                </td>\n              </ng-container>\n\n              <!-- Columna de Acciones -->\n              <ng-container\n                *ngIf=\"tableConfigurations?.actionsColumn\"\n                matColumnDef=\"actions\"\n              >\n                <th\n                  mat-header-cell\n                  *matHeaderCellDef\n                  [class.header-borders]=\"tableConfigurations?.headerBorders\"\n                  class=\"actions-th\"\n                >\n                  Acciones\n                </th>\n                <td\n                  mat-cell\n                  *matCellDef=\"let row\"\n                  [class.cell-borders]=\"tableConfigurations?.headerBorders\"\n                  style=\"padding: 0\"\n                  class=\"actions-td\"\n                >\n                  <div>\n                    <div\n                      *ngFor=\"let action of tableConfigurations?.actionsColumn\"\n                    >\n                      <button\n                        [disabled]=\"row.processing\"\n                        *ngIf=\"action.confirmation\"\n                        mat-icon-button\n                        matTooltip=\"{{ action.tooltip }}\"\n                        (click)=\"\n                          performRowActionConfirmation(\n                            action,\n                            row,\n                            action.confirmation\n                          )\n                        \"\n                      >\n                        <mat-icon\n                          [style]=\"{\n                            color: row.processing ? 'lightgray' : action.color\n                          }\"\n                          >{{ action.icon }}</mat-icon\n                        >\n                      </button>\n                      <button\n                        [disabled]=\"row.processing\"\n                        *ngIf=\"!action.confirmation\"\n                        mat-icon-button\n                        matTooltip=\"{{ action.tooltip }}\"\n                        (click)=\"onRowActionClick(row, action)\"\n                      >\n                        <mat-icon\n                          [style]=\"{\n                            color: row.processing ? 'lightgray' : action.color\n                          }\"\n                          >{{ action.icon }}</mat-icon\n                        >\n                      </button>\n                    </div>\n                  </div>\n                </td>\n              </ng-container>\n\n              <!-- Columnas de agrupacion -->\n              <ng-container matColumnDef=\"empty-group\">\n                <th *matHeaderCellDef class=\"group-header-empty\"></th>\n              </ng-container>\n              <ng-container\n                *ngFor=\"let col of displayedColumns.columnGroups.groupColumns\"\n                matColumnDef=\"{{ col.name }}\"\n              >\n                <th\n                  mat-header-cell\n                  *matHeaderCellDef\n                  [attr.colspan]=\"col.colspan\"\n                >\n                  {{ col.name }}\n                </th>\n              </ng-container>\n              <tr\n                class=\"group-header\"\n                mat-header-row\n                *matHeaderRowDef=\"displayedColumns.columnGroups.displayNames\"\n              ></tr>\n\n              <!-- Encabezados de columnas -->\n              <tr\n                mat-header-row\n                *matHeaderRowDef=\"displayedColumns.columnNames\"\n              ></tr>\n\n              <!-- Formato condicional de filas -->\n              <tr\n                mat-row\n                [class.mat-row-selected]=\"selectedRows.has(row)\"\n                [class.mat-row-selected-borders]=\"\n                  selectedRows.has(row) &&\n                  tableConfigurations?.selectionStyle == 1\n                \"\n                [class.mat-row-selected-shadow]=\"\n                  selectedRows.has(row) &&\n                  tableConfigurations?.selectionStyle == 2\n                \"\n                [class.mat-row-borders]=\"tableConfigurations?.hoverStyle == 1\"\n                [class.mat-row-shadow]=\"tableConfigurations?.hoverStyle == 2\"\n                style=\"transition: 0.3s all\"\n                [ngStyle]=\"constrainedRows.has(row) ? row.rowStyle.style : ''\"\n                *matRowDef=\"let row; columns: displayedColumns.columnNames\"\n                [class.mat-row-processing]=\"row.processing\"\n              ></tr>\n\n              <!-- Mensaje por defecto en caso de no haber datos o se este fetcheando -->\n              <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">\n                  {{ fetching ? \"fetching data\" : \"No data found\" }}\n                </td>\n              </tr>\n            </table>\n          </div>\n        </mat-drawer-content>\n      </mat-drawer-container>\n\n      <!-- Footer action button -->\n      <div class=\"table-bottom-container\">\n        <button\n          mat-stroked-button\n          class=\"footercell\"\n          (click)=\"performFooterAction()\"\n        >\n          <mat-icon\n            *ngIf=\"tableConfigurations?.footerAction?.icon\"\n            [ngStyle]=\"{\n              color: tableConfigurations?.footerAction?.color || 'currentColor'\n            }\"\n            >{{ tableConfigurations?.footerAction?.icon }}</mat-icon\n          >\n          {{ tableConfigurations?.footerAction?.content }}\n        </button>\n      </div>\n    </div>\n\n    <!-- Paginator -->\n    <div class=\"table-bottom-container\">\n      <mat-paginator\n        [pageSizeOptions]=\"tableConfigurations?.paginationSizes || [5, 10, 20]\"\n        showFirstLastButtons\n        aria-label=\"Select page\"\n      >\n      </mat-paginator>\n    </div>\n\n    <!-- Progressbar -->\n    <mat-progress-bar\n      [mode]=\"fetching ? 'indeterminate' : 'determinate'\"\n    ></mat-progress-bar>\n  </div>\n</div>\n\n<!-- Export Menu -->\n<mat-menu #export=\"matMenu\" xPosition=\"before\">\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n    disabled=\"true\"\n  >\n    Exportar\n  </div>\n</mat-menu>\n\n<!-- Columns Selector Menu -->\n<mat-menu #columns=\"matMenu\" xPosition=\"before\">\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n    disabled=\"true\"\n  >\n    Columnas\n  </div>\n  <mat-divider></mat-divider>\n\n  <div\n    *ngFor=\"let column of displayedColumns.columns\"\n    mat-menu-item\n    (click)=\"$event.stopPropagation()\"\n  >\n    <mat-slide-toggle\n      color=\"primary\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"displayedColumns.changeColumnVisivility(column)\"\n      [checked]=\"column.visible\"\n    >\n      {{ column.name }}\n    </mat-slide-toggle>\n  </div>\n  <mat-divider></mat-divider>\n  <div\n    *ngFor=\"let group of displayedColumns.columnGroups.groupColumns\"\n    mat-menu-item\n    (click)=\"$event.stopPropagation()\"\n  >\n    <mat-slide-toggle\n      color=\"accent\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"\n        group.toogleVisibbility($event.checked);\n        displayedColumns.updateVisivility()\n      \"\n      [checked]=\"group.checked\"\n    >\n      {{ group.name }}\n    </mat-slide-toggle>\n  </div>\n  <button\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"displayedColumns.allVisible(); $event.stopPropagation()\"\n  >\n    Todas\n  </button>\n</mat-menu>\n\n<!-- Constrains Menu -->\n<mat-menu\n  #constrains=\"matMenu\"\n  xPosition=\"before\"\n  style=\"padding: 0.5rem !important\"\n>\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n    disabled=\"true\"\n  >\n    Estilos\n  </div>\n  <div\n    mat-menu-item\n    disableRipple=\"true\"\n    *ngFor=\"let constr of fieldConstrians\"\n    (click)=\"$event.stopPropagation()\"\n    [style]=\"{\n      display: 'flex',\n      'align-items': 'center',\n      'justify-items': 'center',\n      color: constr.constrain.style['color'],\n      'background-color': constr.constrain.style['background-color'],\n      'text-align': 'center'\n    }\"\n  >\n    <span style=\"flex-grow: 1; text-align: center\">{{\n      constr.constrainName\n    }}</span>\n    <button\n      mat-icon-button\n      matTooltip=\"remove\"\n      style=\"justify-self: flex-end; margin-left: 1rem\"\n      [matMenuTriggerFor]=\"constrainDeletionConfirm\"\n      [matMenuTriggerData]=\"{ data: constr }\"\n    >\n      <mat-icon style=\"margin: auto\">delete</mat-icon>\n    </button>\n    <button mat-icon-button style=\"justify-self: flex-end\">\n      <mat-icon style=\"margin: auto\" matTooltip=\"hide\">edit</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      style=\"justify-self: flex-end\"\n      (click)=\"\n        constr.constrain.enable = !constr.constrain.enable; updateVisibility()\n      \"\n    >\n      <mat-icon style=\"margin: auto\" matTooltip=\"hide\">{{\n        constr.constrain.enable ? \"visibility\" : \"visibility_off\"\n      }}</mat-icon>\n    </button>\n  </div>\n\n  <!-- Constrain Creator -->\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n  >\n    <litotable-constrain-creator\n      [columns]=\"displayedColumns.columns\"\n      (result-constrain)=\"addConstrain($event)\"\n      ><mat-icon style=\"margin: auto\"\n        >add_circle</mat-icon\n      ></litotable-constrain-creator\n    >\n  </div>\n</mat-menu>\n\n<mat-menu #constrainDeletionConfirm=\"matMenu\" xPosition=\"before\">\n  <ng-template matMenuContent let-constrain=\"data\">\n    <button\n      mat-menu-item\n      (click)=\"removeConstrain(constrain)\"\n      style=\"color: red; font-weight: 500\"\n    >\n      confirm remove\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #constrain=\"matMenu\" xPosition=\"before\">\n  <ng-template matMenuContent let-data=\"data\">\n    <mat-card\n      (click)=\"$event.stopPropagation()\"\n      (keypress)=\"$event.stopPropagation()\"\n    >\n      <mat-card-content\n        (click)=\"$event.stopPropagation()\"\n        (keypress)=\"$event.stopPropagation()\"\n        class=\"constrain-mat-content\"\n      >\n        <div\n          class=\"constrain-mat-content-dual\"\n          (click)=\"$event.stopPropagation()\"\n          (keypress)=\"$event.stopPropagation()\"\n        >\n          <app-lito-color-picker\n            [colors]=\"tableConfigurations?.rowStyleColors\"\n            (result)=\"\n              changeConstrainState($event, data.constrain, 'background-color')\n            \"\n            content=\"Background\"\n          ></app-lito-color-picker>\n          <app-lito-color-picker\n            [colors]=\"tableConfigurations?.rowStyleColors\"\n            (result)=\"changeConstrainState($event, data.constrain, 'color')\"\n            content=\"Foreground\"\n          ></app-lito-color-picker>\n        </div>\n        <div\n          [style]=\"{\n            color: data.constrain.style['color'],\n            'background-color': data.constrain.style['background-color'],\n            'margin-bottom': '1rem',\n            'text-align': 'center',\n            padding: '0.5rem 0',\n            width: '100%'\n          }\"\n        >\n          {{ data.constrain.values[0] }}\n        </div>\n        <mat-button-toggle-group\n          name=\"fontStyle\"\n          aria-label=\"Font Style\"\n          (click)=\"$event.stopPropagation()\"\n          value=\"{{ data.constrain.type }}\"\n          (change)=\"\n            changeConstrainState($event, data.constrain, 'number-type', false)\n          \"\n        >\n          <mat-button-toggle value=\"1\">=</mat-button-toggle>\n          <mat-button-toggle value=\"2\">{{ \"\\>\" }}</mat-button-toggle>\n          <mat-button-toggle value=\"3\">{{ \"\\<\" }}</mat-button-toggle>\n          <mat-button-toggle value=\"4\">{{ \"\\<\\>\" }}</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div\n          *ngIf=\"data.constrain.type != numberConstrainType.BETWEEN\"\n          (click)=\"$event.stopPropagation()\"\n          (keydown)=\"$event.stopPropagation()\"\n          (keypress)=\"$event.stopPropagation()\"\n          style=\"display: flex; justify-content: space-between\"\n        >\n          <mat-form-field\n            style=\"width: 100%\"\n            appearance=\"fill\"\n            (click)=\"$event.stopPropagation()\"\n            (keypress)=\"$event.stopPropagation()\"\n            (keydown)=\"$event.stopPropagation()\"\n          >\n            <mat-label (click)=\"$event.stopPropagation()\">VALOR</mat-label>\n            <input\n              type=\"number\"\n              step=\"100\"\n              (keydown)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              (click)=\"$event.stopPropagation()\"\n              (change)=\"\n                $event.stopPropagation();\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value',\n                  false\n                )\n              \"\n              (keyup)=\"\n                $event.stopPropagation();\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value',\n                  false\n                )\n              \"\n              matInput\n              placeholder=\"\"\n              value=\"{{ data.constrain.values[0] }}\"\n            />\n          </mat-form-field>\n        </div>\n        <!-- BETWEEN -->\n        <div\n          *ngIf=\"data.constrain.type == numberConstrainType.BETWEEN\"\n          (click)=\"$event.stopPropagation()\"\n          (keypress)=\"$event.stopPropagation()\"\n          (keydown)=\"$event.stopPropagation()\"\n          style=\"max-width: fit-content; display: flow-root\"\n        >\n          <mat-form-field\n            style=\"max-width: 45%; float: left\"\n            appearance=\"fill\"\n            (click)=\"$event.stopPropagation()\"\n            (keypress)=\"$event.stopPropagation()\"\n            (keydown)=\"$event.stopPropagation()\"\n          >\n            <mat-label (click)=\"$event.stopPropagation()\">DESDE</mat-label>\n            <input\n              type=\"number\"\n              (click)=\"$event.stopPropagation()\"\n              (keydown)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              (change)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value1',\n                  false\n                )\n              \"\n              (keyup)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value1',\n                  false\n                )\n              \"\n              matInput\n              placeholder=\"\"\n              value=\"{{ data.constrain.values[0] }}\"\n            />\n          </mat-form-field>\n          <mat-form-field\n            style=\"max-width: 45%; float: right\"\n            appearance=\"fill\"\n            (click)=\"$event.stopPropagation()\"\n            (keypress)=\"$event.stopPropagation()\"\n            (keydown)=\"$event.stopPropagation()\"\n          >\n            <mat-label\n              (click)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              >HASTA</mat-label\n            >\n            <input\n              type=\"number\"\n              step=\"100\"\n              (change)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value2',\n                  false\n                )\n              \"\n              (click)=\"$event.stopPropagation()\"\n              (keydown)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              (keyup)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value2',\n                  false\n                )\n              \"\n              matInput\n              placeholder=\"\"\n              value=\"{{ data.constrain.values[1] }}\"\n            />\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </ng-template>\n</mat-menu>\n\n<!-- sidenav-menu -->\n<ng-template #sidenavMenu>\n  <div style=\"padding: 1rem\">\n    <h2>\n      <span *ngIf=\"_confirmation == 'single'\">\n        {{\n          rowConfirmation\n            ? rowConfirmation?.confirmationData?.title\n            : \"Confirmacion\"\n        }}\n      </span>\n      <span *ngIf=\"_confirmation == 'multiple'\">\n        {{\n          generalConfirmation\n            ? generalConfirmation?.confirmationData?.title\n            : \"Confirmacion\"\n        }}\n      </span>\n    </h2>\n    <p>\n      <span *ngIf=\"_confirmation == 'single'\">\n        {{ rowConfirmation?.confirmationData?.content }}\n      </span>\n      <span *ngIf=\"_confirmation == 'multiple'\">\n        {{ generalConfirmation?.confirmationData?.content }}\n      </span>\n    </p>\n\n    <button\n      mat-raised-button\n      color=\"primary\"\n      style=\"margin-right: 0.5rem\"\n      (click)=\"\n        drawer.toggle();\n        _confirmation == 'single'\n          ? onRowActionClick(rowConfirmation?.row, rowConfirmation!.action)\n          : onGeneralActionClick(generalConfirmation!.action)\n      \"\n    >\n      accept\n    </button>\n    <button mat-raised-button color=\"warn\" (click)=\"drawer.toggle()\">\n      cancel\n    </button>\n  </div>\n</ng-template>\n", styles: [".litotable-main-container{width:100%;display:flex;flex-direction:row}.litotable-container{width:100%}.litotable-operations{width:0%;transition:.5s all}.litotable-operations.growed{width:50%;margin-left:1rem}table{width:100%;max-width:100%;max-height:100%}.table-responsive{overflow:auto;min-height:.01%}.table-container{padding:1rem 1rem 0}.mat-cell>div{padding:0 10px!important;width:max-content!important}.mat-header-row .mat-header-cell{padding:0 .5rem}.mat-row{transition:.3s all}.mat-header-row .mat-header-cell.header-borders{border-right:1px solid rgba(0,0,0,.12)}.mat-header-row .mat-header-cell.header-borders:nth-child(2){border-left:1px solid rgba(0,0,0,.12)}.mat-row .mat-cell.cell-borders{border-right:1px solid rgba(0,0,0,.12)}.mat-row .mat-cell.cell-borders:nth-child(2){border-left:1px solid rgba(0,0,0,.12)}.mat-row .mat-cell{border-bottom:1px solid transparent;border-top:1px solid transparent}.mat-row.mat-row-borders:hover .mat-cell,.mat-row.mat-row-selected-borders .mat-cell{border-bottom:1px dashed currentColor;border-top:1px dashed currentColor}.mat-row.mat-row-shadow:hover .mat-cell,.mat-row.mat-row-selected-shadow .mat-cell{background-color:#0000000d}.row-is-selected{filter:brightness(1.2) contrast(.8)}.mat-column-selection{overflow:initial}.mat-header-cell{border-top-width:1px;border-top-color:#0000001f;background-color:#00000005;border-top-style:solid}th.mat-column-selection.mat-header-cell:first-of-type,td.mat-column-selection.mat-cell:first-of-type,td.mat-column-selection.mat-footer-cell:first-of-type{padding-left:10px;padding-right:10px;width:20px}.table-top-container,.table-bottom-container{display:flex}.table-top-container{justify-content:flex-end}.table-bottom-container mat-paginator{flex-grow:1}.table-operations mat-expansion-panel{margin:1rem 0}::ng-deep .column-content-alignment-1>div{text-align:left}::ng-deep .column-content-alignment-2>div{text-align:center}::ng-deep .column-content-alignment-3>div{text-align:right}.operation-buttons-container{display:flex;flex-direction:row;justify-content:flex-start}.operation-buttons-container>div{margin:0 .5rem}.constrain-mat-content>*{width:100%}.constrain-mat-content>mat-button-toggle-group{margin-bottom:1rem}.constrain-mat-content>mat-button-toggle-group>*{width:25%}.constrain-mat-content .constrain-mat-content-dual{display:flex;width:100%;justify-content:space-between;margin-bottom:1rem}.constrain-mat-content .constrain-mat-content-dual>*{width:45%}.group-header{height:2rem}.group-header>*{border-bottom:none;border-right:1px solid rgba(0,0,0,.12);border-left:1px solid rgba(0,0,0,.12);text-align:center}.group-header-empty{border-right:none!important;border-left:none!important}.cdk-drag-preview{box-sizing:border-box;padding:1rem;position:relative}.cdk-drag-preview:after{content:\"\";position:absolute;top:0;bottom:0;left:5px;right:5px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{color:transparent;position:relative;transition:transform .25s cubic-bezier(0,0,.2,1)}.actions-td,.actions-th{position:sticky;right:0;border-left:1px solid rgba(0,0,0,.12);background:white!important}.actions-td>div{display:flex;flex-direction:row;height:100%}.mat-row-processing:after{background:linear-gradient(110deg,rgba(225,225,225,.5) 8%,rgba(255,255,255,.8) 18%,rgba(225,225,225,.5) 33%);opacity:.5;background-size:200% 100%;animation:1.5s shine linear infinite;cursor:not-allowed;position:absolute;left:0;content:\"\";width:100%;height:inherit}.mat-row-processing>*:not(:last-child){color:#d3d3d3!important;border-right:0px solid!important;border-left:0px solid!important}@keyframes shine{to{background-position-x:-200%}}.footercell{width:100%;border-radius:0 0 3px 3px}.mat-row.deletion-row{transition:all 1s ease!important;height:0px}\n"], components: [{ type: i8.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i8.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i5$1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { type: i5$1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { type: i5$1.MatDrawerContent, selector: "mat-drawer-content" }, { type: i6$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i7$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i8$1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i6$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i6$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { type: i10$1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "mode", "value", "bufferValue"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { type: i11.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i11.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { type: i12$1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { type: i13.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: ConstrainCreatorComponent, selector: "litotable-constrain-creator", inputs: ["columns"], outputs: ["result-constrain"] }, { type: i15$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: LitoColorPickerComponent, selector: "app-lito-color-picker", inputs: ["colors", "content"], outputs: ["result", "newColorArray"] }, { type: i10.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i5.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i8.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i8.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i11.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i19.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i19.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i15.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i19.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i19.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i8$1.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i6$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i6$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i6$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i6$1.MatCellDef, selector: "[matCellDef]" }, { type: i6$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i6$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i6$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i6$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { type: i11.MatMenuContent, selector: "ng-template[matMenuContent]" }, { type: i15$1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i10.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i5.MatLabel, selector: "mat-label" }, { type: i16.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }], pipes: { "number": i19.DecimalPipe, "date": i19.DatePipe, "currency": i19.CurrencyPipe, "cuit": CuitPipe, "phone": PhonePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitotableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lito-table',
                    templateUrl: './lito-table.component.html',
                    styleUrls: ['./lito-table.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.LiveAnnouncer }]; }, propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], inputSource: [{
                type: Input,
                args: ['source']
            }], dataType: [{
                type: Input,
                args: ['type']
            }], tableActionsConfig: [{
                type: Input,
                args: ['tableActionsConfig']
            }], selection: [{
                type: Input,
                args: ['selection']
            }], tableConfigurations: [{
                type: Input,
                args: ['configurations']
            }], fieldConstrians: [{
                type: Input,
                args: ['fieldConstrians']
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }], drawer: [{
                type: ViewChild,
                args: [MatDrawer]
            }], multipleActionOutput: [{
                type: Output,
                args: ['multipleActionOutput']
            }], singleActionOutput: [{
                type: Output,
                args: ['singleActionOutput']
            }] } });
class DisplayedColumns {
    constructor(columns = [], selectable = false, actionsColumn = false) {
        this.columns = columns;
        this.columnNames = columns
            .filter((c) => c.visible == true)
            .map((x) => x.name);
        this.columnTypes = columns.map((x) => x.type);
        this.selectable = selectable;
        this.actionColumn = actionsColumn;
        if (selectable)
            this.columnNames.unshift('selection');
        if (actionsColumn)
            this.columnNames.push('actions');
        this.columnGroups = new ColumnGroups(columns.length);
    }
    changeColumnVisivility(column) {
        this.columns.filter((c) => c == column)[0].visible = !column.visible;
        this.columnNames = this.columns
            .filter((c) => c.visible == true)
            .map((x) => x.name);
        if (this.selectable)
            this.columnNames.unshift('selection');
        if (this.actionColumn)
            this.columnNames.push('actions');
        this.updateGroups();
    }
    updateVisivility() {
        this.columnNames = this.columns
            .filter((c) => c.visible == true)
            .map((x) => x.name);
        if (this.selectable)
            this.columnNames.unshift('selection');
        if (this.actionColumn)
            this.columnNames.push('actions');
        this.updateGroups();
    }
    updateGroups() {
        this.columnGroups.updateColumns(this.columns.filter((c) => c.visible == true));
    }
    allVisible() {
        this.columns.forEach((c) => (c.visible = true));
        this.columnNames = this.columns
            .filter((c) => c.visible == true)
            .map((x) => x.name);
        if (this.selectable)
            this.columnNames.unshift('selection');
        if (this.actionColumn)
            this.columnNames.push('actions');
    }
}
class GroupColumn {
    constructor(name) {
        this.columns = [];
        this.count = 0;
        this.start = 0;
        this.colspan = 1;
        this.name = name;
        this.checked = this.checkState();
    }
    updateColspan() {
        let groupData = this.columns
            .filter((x) => x.visible)
            .sort((a, b) => a.order - b.order);
        this.colspan = groupData.length;
        if (groupData.length != 0)
            this.start = groupData[0].order;
        this.checked = this.checkState();
    }
    addColumn(c) {
        this.columns.push(c);
        this.updateColspan();
    }
    toogleVisibbility(state) {
        for (const c of this.columns) {
            c.visible = state;
        }
    }
    checkState() {
        return this.columns.some((x) => x.visible);
    }
}
class ColumnGroups {
    constructor(length) {
        this.active = false;
        this.groupColumns = [];
        this.displayNames = [];
        this.size = 0;
        this.displayNames = new Array(length).fill('empty-group');
    }
    updateColumns(visibleColumns) {
        this.displayNames = new Array(visibleColumns.length).fill('empty-group');
        this.groupColumns.forEach((e) => e.updateColspan());
        let deletion = 0;
        for (let i = 0; i < this.groupColumns.length; i++) {
            const element = this.groupColumns[i];
            const firstVisible = element.columns.filter((y) => y.visible)[0];
            if (element.colspan != 0) {
                let index = visibleColumns.findIndex((x) => x.propertyKey == firstVisible.propertyKey);
                this.displayNames.splice(1 + index - deletion, element.colspan, element.name);
                deletion += element.colspan - 1;
            }
        }
        /*
        this.displayNames = visibleColumns
          .reduce(
            (a, c) => {
              const includes = this.groupColumns.some((x) => x.columns.includes(c));
              let str = '';
              this.groupColumns.forEach((gc) => {
                if (gc.columns.includes(c)) {
                  str = gc.name;
                }
              });
              a.push(includes ? str : 'empty-group');
              return a;
            },
            ['empty-group']
          )
          .reduce(
            (a, c) => {
              if (c == 'empty-group' || !a.includes(c)) {
                a.push(c);
              }
              return a;
            },
            ['empty-group']
          );
        */
        this.displayNames.unshift();
    }
}
class RowConstrain {
    constructor(name, _constrain) {
        this.name = name;
        this._constrain = _constrain;
    }
}

class LitotableModule {
}
LitotableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitotableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LitotableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitotableModule, declarations: [CuitPipe,
        PhonePipe,
        LitotableComponent,
        LitoColorPickerComponent,
        DialogColorPicker,
        ConstrainCreatorComponent,
        ConstrainCreationForm], imports: [CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatTabsModule,
        FormsModule,
        MatSliderModule,
        MatSelectModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        DragDropModule,
        MatSidenavModule], exports: [LitotableComponent] });
LitotableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitotableModule, imports: [[
            CommonModule,
            MatTableModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatSortModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatMenuModule,
            MatButtonModule,
            MatIconModule,
            MatCardModule,
            MatInputModule,
            MatRadioModule,
            MatExpansionModule,
            MatButtonToggleModule,
            MatDialogModule,
            MatTabsModule,
            FormsModule,
            MatSliderModule,
            MatSelectModule,
            MatStepperModule,
            ReactiveFormsModule,
            MatTooltipModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatDividerModule,
            DragDropModule,
            MatSidenavModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LitotableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CuitPipe,
                        PhonePipe,
                        LitotableComponent,
                        LitoColorPickerComponent,
                        DialogColorPicker,
                        ConstrainCreatorComponent,
                        ConstrainCreationForm,
                    ],
                    imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatSortModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatMenuModule,
                        MatButtonModule,
                        MatIconModule,
                        MatCardModule,
                        MatInputModule,
                        MatRadioModule,
                        MatExpansionModule,
                        MatButtonToggleModule,
                        MatDialogModule,
                        MatTabsModule,
                        FormsModule,
                        MatSliderModule,
                        MatSelectModule,
                        MatStepperModule,
                        ReactiveFormsModule,
                        MatTooltipModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatDividerModule,
                        DragDropModule,
                        MatSidenavModule,
                    ],
                    exports: [LitotableComponent],
                }]
        }] });

/*
 * Public API Surface of lito-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Column, ColumnContentAlignment, ColumnGroups, ColumnType, ConstrainCreationForm, ConstrainCreationFormData, ConstrainCreatorComponent, CuitPipe, DateConstrain, DialogColorPicker, DisplayedColumns, GeneralActionScope, GroupColumn, LitoColorPickerComponent, LitotableColor, LitotableComponent, LitotableModule, MAIN_COLORS, MesurableConstrainType, NumberConstrain, PhonePipe, RowConstrain, RowStyle, StringConstrain, StringConstrainType, TableActionsConfig, TableColumn, TableOperation };
//# sourceMappingURL=lito-table.js.map
