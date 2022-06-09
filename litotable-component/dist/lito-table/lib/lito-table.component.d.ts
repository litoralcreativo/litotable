import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import 'reflect-metadata';
import { Observable } from 'rxjs';
import { Column } from './column';
import { Constrain, FieldConstrianStyle, MesurableConstrainType } from './configurations/fieldConstrians.config';
import { LitoGeneralAction, LitoGeneralActionConfirmation, LitoRowAction, LitoRowActionConfirmation, TableActionsConfig, TableConfigurations, TableOperation } from './configurations/litotable.config';
import { ColumnType } from './decorators/column.decorator';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDrawer } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class LitotableComponent implements OnInit, AfterViewInit {
    private _liveAnnouncer;
    columnTypes: typeof ColumnType;
    operationTypes: typeof TableOperation;
    columns: Column[];
    numberConstrainType: typeof MesurableConstrainType;
    displayedColumns: DisplayedColumns;
    rowConstrains: RowConstrain[];
    dataSource: MatTableDataSource<unknown>;
    fetching: boolean;
    selectedRows: Set<unknown>;
    constrainedRows: Set<unknown>;
    showSelectedOnly: boolean;
    creationFormOpen: boolean;
    rowConfirmation?: {
        confirmationData: LitoRowActionConfirmation;
        row: any;
        action: LitoRowAction;
    };
    generalConfirmation?: {
        confirmationData: LitoGeneralActionConfirmation;
        action: LitoGeneralAction;
    };
    _confirmation: string;
    filteringColumnsFormControl: FormControl;
    defaultFilterPredicate: (data: unknown, filter: string) => boolean;
    filteringStringFormControl: FormControl;
    paginator: MatPaginator;
    inputSource: Observable<any[]>;
    dataType: Object;
    tableActionsConfig?: TableActionsConfig;
    selection: boolean;
    tableConfigurations?: TableConfigurations;
    fieldConstrians: FieldConstrianStyle[];
    sort: MatSort;
    drawer: MatDrawer;
    multipleActionOutput: EventEmitter<{
        operation: LitoGeneralAction;
        data: Set<any>;
    }>;
    singleActionOutput: EventEmitter<{
        operation: LitoRowAction;
        data: any;
    }>;
    constructor(_liveAnnouncer: LiveAnnouncer);
    ngOnInit(): void;
    parseDate(input: Date): string;
    ngAfterViewInit(): void;
    announceSortChange(sortState: Sort): void;
    updateFieldsToRowsConstrains(): void;
    setRowsConstrains(source: any[]): void;
    updateRowConstrains(): void;
    hasConstrain(propertyKey: string, value: any): boolean;
    setColumns(): void;
    isAllSelected(): boolean;
    masterToggle(): void;
    selectionToogle(state: boolean, row: any): void;
    changeConstrainState(value: any, data: Constrain | any, field: string, isStyle?: boolean): void;
    addConstrain($event: FieldConstrianStyle): void;
    updateVisibility(): void;
    removeConstrain(constrain: FieldConstrianStyle): void;
    tableDrop(event: CdkDragDrop<string[]>): void;
    onRowActionClick(row: any, action: LitoRowAction): void;
    updateRow(row: any, newRow: any): void;
    performFooterAction(): void;
    performRowActionConfirmation(action: LitoRowAction, row: any, confirmation: LitoRowActionConfirmation): void;
    onGeneralActionClick(operation: LitoGeneralAction): void;
    performGeneralAction(operation: LitoGeneralAction): void;
    unLockRow(row: any): void;
    lockSelectedRows(rows: Set<any>): void;
    unLockSelectedRows(rows: Set<any>): void;
    performGeneralActionConfirmation(operation: LitoGeneralAction): void;
    applyFilter(): void;
    setFilterSelection(): void;
    draganddrop: boolean;
    toogleDragAndDrop(): void;
    drop(event: CdkDragDrop<any[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LitotableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LitotableComponent, "lito-table", never, { "inputSource": "source"; "dataType": "type"; "tableActionsConfig": "tableActionsConfig"; "selection": "selection"; "tableConfigurations": "configurations"; "fieldConstrians": "fieldConstrians"; }, { "multipleActionOutput": "multipleActionOutput"; "singleActionOutput": "singleActionOutput"; }, never, never>;
}
export declare class DisplayedColumns {
    columns: Column[];
    columnNames: string[];
    columnTypes: ColumnType[];
    selectable: boolean;
    actionColumn: boolean;
    columnGroups: ColumnGroups;
    constructor(columns?: Column[], selectable?: boolean, actionsColumn?: boolean);
    changeColumnVisivility(column: Column): void;
    updateVisivility(): void;
    updateGroups(): void;
    allVisible(): void;
}
export declare class GroupColumn {
    name: string;
    columns: Column[];
    count: number;
    start: number;
    colspan: number;
    checked: boolean;
    constructor(name: string);
    updateColspan(): void;
    addColumn(c: Column): void;
    toogleVisibbility(state: boolean): void;
    checkState(): boolean;
}
export declare class ColumnGroups {
    active: boolean;
    groupColumns: GroupColumn[];
    displayNames: string[];
    size: number;
    constructor(length: number);
    updateColumns(visibleColumns: Column[]): void;
}
export declare class RowConstrain {
    name: string;
    _constrain: Constrain;
    constructor(name: string, _constrain: Constrain);
}
