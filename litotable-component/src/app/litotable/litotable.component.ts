import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
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
} from './configurations/fieldConstriansStyle';
import { TableConfigurations } from './configurations/litotable.config';
import {
  TableOperation,
  TableOperationConfig,
  ChangedTableData,
  DataChange,
} from './configurations/tableCrud.config';
import { ColumnType, TableColumnMetadata } from './decorators/column.decorator';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'lito-table',
  templateUrl: './litotable.component.html',
  styleUrls: ['./litotable.component.css'],
})
export class LitotableComponent implements OnInit, AfterViewInit {
  columns: Column[] = [];
  columnTypes = ColumnType;
  numberConstrainType = MesurableConstrainType;
  operationTypes = TableOperation;
  displayedColumns: DisplayedColumns = new DisplayedColumns();
  rowConstrains: RowConstrain[] = [];
  dataSource = new MatTableDataSource();
  fetching: boolean = false;
  selectedRows = new Set();
  constrainedRows = new Set();
  showSelectedOnly: boolean = false;
  creationFormOpen: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input('source') inputSource!: Observable<any[]>;
  @Input('type') dataType!: Object;
  @Input('operations') operations?: TableOperationConfig;
  @Input('selection') selection!: boolean;
  @Input('configurations') tableConfigurations?: TableConfigurations;
  @Input('fieldConstrians') fieldConstrians: FieldConstrianStyle[] = [];
  @ViewChild(MatSort) sort!: MatSort;

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
        return new RowConstrain(
          x.propertyKey,
          x.metadata.trigger,
          x.metadata.style,
          x.metadata.enable,
          x.constrain
        );
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
          column.mutable = c.metadata.mutable;
          column.mutableAction = c.metadata.mutableAction;

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
    this.displayedColumns = new DisplayedColumns(this.columns, this.selection);
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

  openCreationForm() {
    // this.creationFormOpen = !this.creationFormOpen;
  }

  tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns.columnNames,
      event.previousIndex + 1,
      event.currentIndex + 1
    );
  }

  selectedCell: any = null;
  changes: ChangedTableData[] = [];
  mutatedCells: Set<HTMLElement> = new Set();

  selectCell(element: HTMLElement, column: Column, object: any) {
    this.selectedCell = element;
    if (!this.changes.some((x) => x.source == object)) {
      this.changes.push({
        source: object,
        changeset: [
          {
            property: column.propertyKey,
            original: object[column.propertyKey],
            change: object[column.propertyKey],
          },
        ],
      });
    }
  }

  mutateCell($event: any, column: Column, object: any, element: HTMLElement) {
    let changeset = this.changes
      .find((x) => x.source == object)
      ?.changeset.find((x) => x.property == column.propertyKey);
    if (changeset) changeset.change = $event;
    if (changeset?.change != changeset?.original) {
      this.mutatedCells.add(element);
    } else if (this.mutatedCells.has(element)) {
      this.mutatedCells.delete(element);
    }
    if (column.mutableAction) {
      const indx = this.dataSource.data.indexOf(object);
      if (indx != -1) {
        this.dataSource.data[indx];
      }
    }
    console.log(changeset);
  }

  restoreMutableValue(column: Column, object: any) {
    let changedObject = this.changes.find((x) => x.source == object);

    if (changedObject) {
      let oldValue = changedObject.changeset.find(
        (x) => x.property == column.propertyKey
      )?.original;
      object[column.propertyKey] = oldValue;
      /* 

      let newChangeset = changedObject.changeset.filter(
        (x) => x.property != column.propertyKey
      );
      this.changes = this.changes.filter((x) => x.source != object);
      this.changes.push({ source: object, changeset: newChangeset }); */
    }

    console.log(this.changes);
  }

  deselectCells() {
    this.selectedCell = null;
  }
}

export class DisplayedColumns {
  columns: Column[];
  columnNames: string[];
  columnTypes: ColumnType[];
  selectable: boolean;
  columnGroups: ColumnGroups;

  constructor(columns: Column[] = [], selectable: boolean = false) {
    this.columns = columns;
    this.columnNames = columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    this.columnTypes = columns.map((x) => x.type);
    this.selectable = selectable;
    if (selectable) this.columnNames.unshift('selection');
    this.columnGroups = new ColumnGroups(columns.length);
  }

  changeColumnVisivility(column: Column) {
    this.columns.filter((c) => c == column)[0].visible = !column.visible;
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
    this.updateGroups();
  }

  updateVisivility() {
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
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
  style: Object;
  constrain: (e: any) => boolean;
  enable: boolean;
  _constrain: Constrain;
  constructor(
    name: string,
    constrain: (e: any) => boolean,
    style: Object,
    enable: boolean,
    _constrain: Constrain
  ) {
    this.name = name;
    this.style = style;
    this.enable = enable;
    this.constrain = constrain;
    this._constrain = _constrain;
  }
}
