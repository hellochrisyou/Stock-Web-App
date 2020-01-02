import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Stock, Profile } from '@shared/interface/interface';

@Component({
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  private _dataSource: MatTableDataSource<Stock | Profile>;
  private _columnIds: string[] = [];
  private _dataArray: any[];
  private _columnObjects: any[];

  @Input()
  public get dataSource(): MatTableDataSource<Stock | Profile> {
    return this._dataSource;
  }
  public set dataSource(ds: MatTableDataSource<Stock | Profile>) {
    ds.sort = this.sort;
    ds.paginator = this.paginator;
    this._dataSource = ds;
  }

  @Input()
  public get columnIds(): any[] {
    return this._columnIds;
  }
  public set columnIds(colObjArr: any[]) {
    this._columnIds = colObjArr.map(c => c.columnId);
  }

  @Input()
  public get columnObjects() {
    return this._columnObjects;
  }
  public set columnObjects(colObjArr: any[]) {
    this._columnObjects = colObjArr;
  }

  @Input()
  public get dataArray(): any[] {
    return this._dataArray;
  }
  public set dataArray(dataArray: any[]) {
    this._dataArray = dataArray;
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    console.log(this.dataArray);
  }

  applyFilter(filterValue: string): void {
    this._dataSource.filter = filterValue.trim().toLowerCase();

    if (this._dataSource.paginator) {
      this._dataSource.paginator.firstPage();
    }
  }

}
