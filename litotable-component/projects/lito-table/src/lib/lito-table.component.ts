import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import 'reflect-metadata';
import { Observable } from 'rxjs';
import { Column } from './column';
import {
  Constrain,
  FieldConstrianStyle,
  MesurableConstrainType,
} from './configurations/fieldConstrians.config';
import {
  LitoGeneralAction,
  LitoGeneralActionConfirmation,
  LitoRowAction,
  LitoRowActionConfirmation,
  TableActionsConfig,
  TableConfigurations,
  TableOperation,
} from './configurations/litotable.config';
import { ColumnType, TableColumnMetadata } from './decorators/column.decorator';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDrawer } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lito-table',
  templateUrl: './lito-table.component.html',
  styleUrls: ['./lito-table.component.css'],
})
export class LitotableComponent implements OnInit, AfterViewInit {
  /* Enums */
  columnTypes = ColumnType;
  operationTypes = TableOperation;

  columns: Column[] = [];
  numberConstrainType = MesurableConstrainType;
  displayedColumns: DisplayedColumns = new DisplayedColumns();
  rowConstrains: RowConstrain[] = [];
  dataSource = new MatTableDataSource();
  fetching: boolean = false;
  selectedRows = new Set();
  constrainedRows = new Set();
  showSelectedOnly: boolean = false;
  creationFormOpen: boolean = false;
  rowConfirmation?: {
    confirmationData: LitoRowActionConfirmation;
    row: any;
    action: LitoRowAction;
  };
  generalConfirmation?: {
    confirmationData: LitoGeneralActionConfirmation;
    action: LitoGeneralAction;
  };
  _confirmation: string = 'multiple';

  /* Filter */
  filteringColumnsFormControl = new FormControl();
  defaultFilterPredicate!: (data: unknown, filter: string) => boolean;
  filteringStringFormControl: FormControl = new FormControl('');

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input('source') inputSource!: Observable<any[]>;
  @Input('type') dataType!: Object;
  @Input('tableActionsConfig') tableActionsConfig?: TableActionsConfig;
  @Input('selection') selection!: boolean;
  @Input('configurations') tableConfigurations?: TableConfigurations;
  @Input('fieldConstrians') fieldConstrians: FieldConstrianStyle[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  @Output('multipleActionOutput') multipleActionOutput: EventEmitter<{
    operation: LitoGeneralAction;
    data: Set<any>;
  }> = new EventEmitter();
  @Output('singleActionOutput') singleActionOutput: EventEmitter<{
    operation: LitoRowAction;
    data: any;
  }> = new EventEmitter();
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.setColumns();
    if (this.inputSource != undefined) {
      this.fetching = true;
      this.inputSource.subscribe((datos: any[]) => {
        this.fetching = false;
        this.dataSource = new MatTableDataSource(datos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.setRowsConstrains(datos);
        this.tableActionsConfig?.updatePermormableState(this.selectedRows);
        this.defaultFilterPredicate = this.dataSource.filterPredicate;
      });
    } else {
      let c: any[] = [];
      this.dataSource = new MatTableDataSource(c);
    }
    this.dataSource.paginator = this.paginator;
  }

  parseDate(input: Date): string {
    return input.toJSON();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
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

  setRowsConstrains(source: any[]) {
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
            } else if (element['rowStyle']) {
              element['rowStyle'].style = {
                ...element['rowStyle'].style,
                ...rc._constrain.style,
              };
            }
            this.constrainedRows.add(element);
          }
        }
      });
    });
  }

  updateRowConstrains() {
    this.constrainedRows = new Set();

    const source: any[] = this.dataSource.data;
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
            } else if (element['rowStyle']) {
              element['rowStyle'].style = {
                ...element['rowStyle'].style,
                ...rc._constrain.style,
              };
            }
            this.constrainedRows.add(element);
          }
        }
      });
    });
  }

  hasConstrain(propertyKey: string, value: any): boolean {
    let result = false;
    if (this.rowConstrains.length != 0) {
    }
    return result;
  }

  setColumns() {
    const columnsMetadata: any[] = Reflect.getMetadata(
      'columnsMetadata',
      this.dataType
    );

    let columnGroups: ColumnGroups = new ColumnGroups(0);

    if (columnsMetadata != undefined) {
      this.columns = columnsMetadata.map(
        (c: { propertyKey: string; metadata: TableColumnMetadata }, i) => {
          let column = new Column(
            c.propertyKey,
            c.propertyKey,
            ColumnType.STRING,
            c.metadata.order
          );
          column.visible =
            c.metadata.visible == undefined ? true : c.metadata.visible;
          column.name = c.metadata.columnName || c.propertyKey;
          column.type = c.metadata.type || ColumnType.STRING;
          column.format = c.metadata.format || undefined;
          column.contentAlign = c.metadata.contentAlign || undefined;
          column.enumTypeAsociation =
            c.metadata.enumTypeAsociation || undefined;

          const str = c.metadata.columnGroup?.name;
          if (str) {
            if (
              columnGroups.groupColumns.filter((x) => x.name == str).length == 0
            ) {
              let newColGroup = new GroupColumn(str);
              newColGroup.addColumn(column);
              columnGroups.groupColumns.push(newColGroup);
            } else {
              columnGroups.groupColumns
                .filter((x) => x.name == str)[0]
                .addColumn(column);
            }
          }
          return column;
        }
      );
      this.columns.sort((a, b) => {
        return a.order! - b.order!;
      });
    }
    this.displayedColumns = new DisplayedColumns(
      this.columns,
      this.selection,
      this.tableConfigurations?.actionsColumn != undefined
    );
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

  selectionToogle(state: boolean, row: any) {
    if (state) {
      this.selectedRows.add(row);
    } else {
      if (this.selectedRows.has(row)) this.selectedRows.delete(row);
    }
    if (this.tableActionsConfig?.actions) {
      this.tableActionsConfig.updatePermormableState(this.selectedRows);
    }
  }

  changeConstrainState(
    value: any,
    data: Constrain | any,
    field: string,
    isStyle: boolean = true
  ) {
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

  addConstrain($event: FieldConstrianStyle) {
    this.fieldConstrians.push($event);
    this.updateFieldsToRowsConstrains();
    this.updateRowConstrains();
  }

  updateVisibility() {
    this.updateFieldsToRowsConstrains();
    this.updateRowConstrains();
  }

  removeConstrain(constrain: FieldConstrianStyle) {
    this.fieldConstrians = this.fieldConstrians.filter((x) => x != constrain);
    this.updateVisibility();
  }

  tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns.columnNames,
      event.previousIndex + 1,
      event.currentIndex + 1
    );
  }

  onRowActionClick(row: any, action: LitoRowAction) {
    if (
      action.actionResult.willUpdateRow ||
      action.actionResult.willDeleteRow
    ) {
      row.processing = true;
      this.singleActionOutput.emit({
        operation: action,
        data: row,
      });
    }
  }

  updateRow(row: any, newRow: any) {
    let indx = this.dataSource.data.indexOf(row);
    if (newRow) {
      this.dataSource.data[indx] = newRow;
      (this.dataSource.data[indx] as any).processing = false;
      this.selectedRows.delete(this.dataSource.data[indx]);
    } else {
      this.dataSource.data.splice(indx, 1);
      row.processing = false;
    }
    this.selectedRows.delete(row);

    this.dataSource._updateChangeSubscription();
    this.updateVisibility();
  }

  performFooterAction() {
    if (
      this.tableConfigurations?.footerAction?.actionResult.nonObservableAction
    ) {
      this.tableConfigurations?.footerAction?.actionResult.nonObservableAction();
    }
  }

  performRowActionConfirmation(
    action: LitoRowAction,
    row: any,
    confirmation: LitoRowActionConfirmation
  ) {
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

  onGeneralActionClick(operation: LitoGeneralAction) {
    this.performGeneralAction(operation);
  }

  performGeneralAction(operation: LitoGeneralAction) {
    this.multipleActionOutput.emit({
      operation: operation,
      data: this.selectedRows,
    });
    if (operation.mustLockRows) {
      this.lockSelectedRows(this.selectedRows);
    }
  }

  unLockRow(row: any) {
    row.processing = false;
  }
  lockSelectedRows(rows: Set<any>) {
    rows.forEach((row) => {
      row.processing = true;
    });
  }
  unLockSelectedRows(rows: Set<any>) {
    rows.forEach((row) => {
      row.processing = false;
    });
  }

  performGeneralActionConfirmation(operation: LitoGeneralAction) {
    this._confirmation = 'multiple';
    this.generalConfirmation = {
      confirmationData: operation.confirmation!,
      action: operation,
    };

    if (this.drawer) {
      this.drawer.open();
    }
  }

  applyFilter() {
    const filterValue = this.filteringStringFormControl.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setFilterSelection() {
    if (
      this.filteringColumnsFormControl.value &&
      this.filteringColumnsFormControl.value.length != 0
    ) {
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        let result = false;
        result = this.filteringColumnsFormControl.value.some(
          (field: string) => {
            return data[field].toString().toLowerCase().indexOf(filter) !== -1;
          }
        );
        return result;
      };
    } else {
      this.dataSource.filterPredicate = this.defaultFilterPredicate;
    }
    this.applyFilter();
  }

  draganddrop: boolean = false;
  /* DragAndDrop */
  toogleDragAndDrop() {
    this.draganddrop = !this.draganddrop;
  }
  drop(event: CdkDragDrop<any[]>) {
    const rowIndex =
      event.currentIndex + this.paginator.pageIndex * this.paginator.pageSize;
    const element = event.container.data[rowIndex];
    console.log(element);

    /* if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } */
  }
}

export class DisplayedColumns {
  columns: Column[];
  columnNames: string[];
  columnTypes: ColumnType[];
  selectable: boolean;
  actionColumn: boolean;
  columnGroups: ColumnGroups;

  constructor(
    columns: Column[] = [],
    selectable: boolean = false,
    actionsColumn: boolean = false
  ) {
    this.columns = columns;
    this.columnNames = columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    this.columnTypes = columns.map((x) => x.type);
    this.selectable = selectable;
    this.actionColumn = actionsColumn;
    if (selectable) this.columnNames.unshift('selection');
    if (actionsColumn) this.columnNames.push('actions');
    this.columnGroups = new ColumnGroups(columns.length);
  }

  changeColumnVisivility(column: Column) {
    this.columns.filter((c) => c == column)[0].visible = !column.visible;
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
    if (this.actionColumn) this.columnNames.push('actions');
    this.updateGroups();
  }

  updateVisivility() {
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
    if (this.actionColumn) this.columnNames.push('actions');
    this.updateGroups();
  }

  updateGroups() {
    this.columnGroups.updateColumns(
      this.columns.filter((c) => c.visible == true)
    );
  }

  allVisible() {
    this.columns.forEach((c) => (c.visible = true));
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
    if (this.actionColumn) this.columnNames.push('actions');
  }
}

export class GroupColumn {
  name: string;
  columns: Column[] = [];
  count: number = 0;
  start: number = 0;
  colspan: number = 1;
  checked: boolean;
  constructor(name: string) {
    this.name = name;
    this.checked = this.checkState();
  }
  updateColspan() {
    let groupData = this.columns
      .filter((x) => x.visible)
      .sort((a, b) => a.order - b.order);
    this.colspan = groupData.length;
    if (groupData.length != 0) this.start = groupData[0].order;
    this.checked = this.checkState();
  }
  addColumn(c: Column) {
    this.columns.push(c);
    this.updateColspan();
  }
  toogleVisibbility(state: boolean) {
    for (const c of this.columns) {
      c.visible = state;
    }
  }
  checkState() {
    return this.columns.some((x) => x.visible);
  }
}

export class ColumnGroups {
  active: boolean = false;
  groupColumns: GroupColumn[] = [];
  displayNames: string[] = [];
  size: number = 0;
  constructor(length: number) {
    this.displayNames = new Array(length).fill('empty-group');
  }
  updateColumns(visibleColumns: Column[]) {
    this.displayNames = new Array(visibleColumns.length).fill('empty-group');
    this.groupColumns.forEach((e) => e.updateColspan());
    let deletion = 0;
    for (let i = 0; i < this.groupColumns.length; i++) {
      const element = this.groupColumns[i];
      const firstVisible = element.columns.filter((y) => y.visible)[0];

      if (element.colspan != 0) {
        let index = visibleColumns.findIndex(
          (x) => x.propertyKey == firstVisible.propertyKey
        );
        this.displayNames.splice(
          1 + index - deletion,
          element.colspan,
          element.name
        );
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

export class RowConstrain {
  name: string;
  _constrain: Constrain;
  constructor(name: string, _constrain: Constrain) {
    this.name = name;
    this._constrain = _constrain;
  }
}
