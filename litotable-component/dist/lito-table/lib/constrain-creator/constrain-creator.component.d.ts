import { EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Column } from '../column';
import { FieldConstrianStyle, MesurableConstrainType, StringConstrainType } from '../configurations/fieldConstrians.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import * as i0 from "@angular/core";
export declare class ConstrainCreationFormData {
    columns: Column[];
}
export declare class ConstrainCreatorComponent implements OnInit {
    dialog: MatDialog;
    columns: Column[];
    result: EventEmitter<FieldConstrianStyle>;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConstrainCreatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConstrainCreatorComponent, "litotable-constrain-creator", never, { "columns": "columns"; }, { "result": "result-constrain"; }, never, ["*"]>;
}
export declare class ConstrainCreationForm {
    dialogRef: MatDialogRef<ConstrainCreationForm>;
    data: ConstrainCreationFormData;
    private _formBuilder;
    fieldFormGroup: FormGroup;
    stringFormGroup: FormGroup;
    fieldConstrain: FieldConstrianStyle | any;
    numberConstrainType: typeof MesurableConstrainType;
    stringConstrainType: typeof StringConstrainType;
    finalString: string;
    valueType: string;
    strAccordion: MatAccordion;
    dateRange: FormGroup;
    constructor(dialogRef: MatDialogRef<ConstrainCreationForm>, data: ConstrainCreationFormData, _formBuilder: FormBuilder);
    ngOnInit(): void;
    onNoClick(): void;
    onFieldSelectorChange(selected: Column): void;
    changeConstrainStyle(value: any, field: string): void;
    changeConstrainState(value: any, field: string): void;
    getFinalText(): void;
    shortDate(str: string): string;
    resetValues(): void;
    updateStringConstrain(): void;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConstrainCreationForm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConstrainCreationForm, "constrain-creation-form-dialog", never, {}, {}, never, never>;
}
