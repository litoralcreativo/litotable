import { LiveAnnouncer } from '@angular/cdk/a11y';
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
  selector: 'app-litotable',
  templateUrl: './litotable.component.html',
  styleUrls: ['./litotable.component.css'],
})
export class LitotableComponent implements OnInit, AfterViewInit {
  columns: Column[] = [];
  columnTypes = ColumnType;
  displayedColumns: DisplayedColumns = new DisplayedColumns();
  rowConstrains: RowConstrain[] = [];
  dataSource = new MatTableDataSource();
  fetching: boolean = false;
  selectedRows = new Set();
  constrainedRows = new Set();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input('source') inputSource!: Promise<[]>;
  @Input('type') dataType!: Object;
  @Input('configurations') tableConfigurations?: TableConfigurations;
  @ViewChild(MatSort) sort!: MatSort;

  dateFormat: string = 'yyyy-MM-dd';

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
    const rowsConstrain: any[] = Reflect.getMetadata(
      'rowConstrain',
      this.dataType
    );
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
            if (!element['constrain']) {
              Object.defineProperty(element, 'constrain', {
                configurable: true,
                enumerable: false,
                value: { style: rc.style },
                writable: true,
              });
            } else if (element['constrain']) {
              element['constrain'].style = {
                ...element['constrain'].style,
                ...rc.style,
              };
            }
            this.constrainedRows.add(element);
          }
        }
      });
    });
    console.log(this.constrainedRows);
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
    this.displayedColumns = new DisplayedColumns(this.columns);
  }
}

export class DisplayedColumns {
  columns: Column[];
  columnNames: string[];
  columnTypes: ColumnType[];
  constructor(columns: Column[] = []) {
    this.columns = columns;
    this.columnNames = columns.map((x) => x.name);
    this.columnTypes = columns.map((x) => x.type);
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
