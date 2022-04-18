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

@Component({
  selector: 'app-litotable',
  templateUrl: './litotable.component.html',
  styleUrls: ['./litotable.component.css'],
})
export class LitotableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();
  fetching: boolean = false;
  selectedRows = new Set();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input('source') inputSource!: Promise<[]>;
  @Input('type') dataType!: Object;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.dataType ? this.dataType : {});
    if (this.inputSource != undefined) {
      console.log(this.inputSource);
      if (Array.isArray(this.inputSource)) {
        this.dataSource = new MatTableDataSource(this.inputSource);
      } else {
        this.fetching = true;
        this.inputSource.then((result: any[]) => {
          this.fetching = false;
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    } else {
      let c: any[] = [];
      this.dataSource = new MatTableDataSource(c);
    }
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
