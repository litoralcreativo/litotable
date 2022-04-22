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
import { Column } from './column';
import { TableConfigurations } from './configurations/litotable.config';
import { ColumnType, TableColumnMetadata } from './decorators/column.decorator';
import { TableRowMetadata } from './decorators/row.decorator';

@Component({
  selector: 'lito-table',
  templateUrl: './litotable.component.html',
  styleUrls: ['./litotable.component.css'],
})
export class LitotableComponent implements OnInit, AfterViewInit {
  columns: Column[] = [];
  columnTypes = ColumnType;
  displayedColumns: DisplayedColumns = new DisplayedColumns();
  rowConstrains: RowConstrain[] = [];
  dataSource = new MatTableDataSource();
  selectedDataSource = new MatTableDataSource();
  fetching: boolean = false;
  selectedRows = new Set();
  constrainedRows = new Set();
  showSelectedOnly: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input('source') inputSource!: Promise<[]>;
  @Input('type') dataType!: Object;
  @Input('selection') selection!: boolean;
  @Input('configurations') tableConfigurations?: TableConfigurations;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.setColumns();
    if (this.inputSource != undefined) {
      if (Array.isArray(this.inputSource)) {
        this.dataSource = new MatTableDataSource(this.inputSource);
      } else {
        this.fetching = true;
        this.inputSource.then((result: any[]) => {
          this.fetching = false;
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.setRowsConstrains(result);
        });
      }
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

  setRowsConstrains(source: any[]) {
    const rowsConstrain: any[] = Reflect.getMetadata('rowStyle', this.dataType);
    this.rowConstrains = rowsConstrain.map((x) => {
      return new RowConstrain(
        x.propertyKey,
        x.metadata.trigger,
        x.metadata.style,
        x.metadata.enable
      );
    });
    source.forEach((element) => {
      this.rowConstrains.forEach((rc) => {
        const value = element[rc.name];
        if (rc.constrain(value)) {
          if (rc.enable) {
            if (!element['rowStyle']) {
              Object.defineProperty(element, 'rowStyle', {
                configurable: true,
                enumerable: false,
                value: { style: rc.style },
                writable: true,
              });
            } else if (element['rowStyle']) {
              element['rowStyle'].style = {
                ...element['rowStyle'].style,
                ...rc.style,
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
          column.visible = c.metadata.visible || true;
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
}

export class RowConstrain {
  name: string;
  style: Object;
  constrain: (e: any) => boolean;
  enable: boolean;
  constructor(
    name: string,
    constrain: () => boolean,
    style: Object,
    enable: boolean
  ) {
    this.name = name;
    this.style = style;
    this.enable = enable;
    this.constrain = constrain;
  }
}
