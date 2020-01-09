import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Stock, Ipo } from '@shared/interface/models';
import { FirebaseService } from 'app/core/service/crud/firebase.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private _isStock: boolean;
  private _isSearch: boolean;
  private _dataSource: MatTableDataSource<Stock | Ipo>;
  private _columnIds: string[] = [];
  private _dataArray: any[];
  private _columnObjects: any[];
  router: any;

  @Input()
  public get isStock(): boolean {
    return this._isStock;
  }
  public set isStock(value: boolean) {
    this._isStock = value;
  }

  @Input()
  public get isSearch(): boolean {
    return this._isSearch;
  }
  public set isSearch(value: boolean) {
    this._isSearch = value;
  }

  @Input()
  public get dataSource(): MatTableDataSource<Stock | Ipo> {
    return this._dataSource;
  }
  public set dataSource(ds: MatTableDataSource<Stock | Ipo>) {
    if (ds) {
      ds.sort = this.sort;
      ds.paginator = this.paginator;
      this._dataSource = ds;
    }
  }

  @Input()
  public get columnIds(): any[] {
    return this._columnIds;
  }
  public set columnIds(colObjArr: any[]) {
    if (colObjArr) {
      this._columnIds = colObjArr.map(c => c.columnId);
    }
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

  constructor(
    private firebaseService: FirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }

  public applyFilter(filterValue: string): void {
    this._dataSource.filter = filterValue.trim().toLowerCase();

    if (this._dataSource.paginator) {
      this._dataSource.paginator.firstPage();
    }
  }

  public select(value: number): void {
    console.log('valuevalue', value);
    if (this.isSearch) {
      // Add
      if (this.isStock) {
        // Add Stock
        this.firebaseService.addStock(this.dataArray[value])
          .then(
            res => {
              this.resetFields();
              // use snack bar
            }
          )
      } else {
        // Add Ipo 
        this.firebaseService.addIpo(this.dataArray[value])
          .then(
            res => {
              this.resetFields();
              // use snack bar
            }
          )
      }
    } else {
      // Delete
      if (this.isStock) {
        // Delete Stock

      } else {
        // Delete Ipo
      }
    }
    this.openSnackBar('Item added to your list', 'SUCCESS');

  }
  resetFields() {
    throw new Error("Method not implemented.");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
