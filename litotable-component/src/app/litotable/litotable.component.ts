import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
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
} from './configurations/tableCrud.config';
import { ColumnType, TableColumnMetadata } from './decorators/column.decorator';

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

    if (columnsMetadata != undefined) {
      this.columns = columnsMetadata.map(
        (c: { propertyKey: string; metadata: TableColumnMetadata }, i) => {
          let column = new Column(
            c.propertyKey,
            c.propertyKey,
            ColumnType.STRING
          );
          column.visible =
            c.metadata.visible == undefined ? true : c.metadata.visible;
          column.order = c.metadata.order || i + 1;
          column.name = c.metadata.columnName || c.propertyKey;
          column.type = c.metadata.type || ColumnType.STRING;
          column.format = c.metadata.format || undefined;
          column.contentAlign = c.metadata.contentAlign || undefined;
          return column;
        }
      );
      this.columns.sort((a, b) => {
        return a.order! - b.order!;
      });
    }
    this.displayedColumns = new DisplayedColumns(this.columns, this.selection);
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
          console.log(data.values);
          console.log(value.target.value);
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
    console.log(this.fieldConstrians);
  }

  openCreationForm() {
    // this.creationFormOpen = !this.creationFormOpen;
  }
}

export class DisplayedColumns {
  columns: Column[];
  columnNames: string[];
  columnTypes: ColumnType[];
  selectable: boolean;
  constructor(columns: Column[] = [], selectable: boolean = false) {
    this.columns = columns;
    this.columnNames = columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    this.columnTypes = columns.map((x) => x.type);
    this.selectable = selectable;
    if (selectable) this.columnNames.unshift('selection');
  }

  changeColumnVisivility(column: Column) {
    this.columns.filter((c) => c == column)[0].visible = !column.visible;
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
  }

  allVisible() {
    this.columns.forEach((c) => (c.visible = true));
    this.columnNames = this.columns
      .filter((c) => c.visible == true)
      .map((x) => x.name);
    if (this.selectable) this.columnNames.unshift('selection');
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
