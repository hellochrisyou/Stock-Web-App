import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as GLOBAL from '@shared/const/url.const';
import { ChartComponent } from '@shared/dialog/chart/chart.component';
import { SearchHistory, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/http/http.service';
import { NanService } from 'app/core/service/mapper/nan.service';
import { ErrorComponent } from '@shared/dialog/error/error.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  tmpSearchArr: SearchHistory[] = [];

  private _isStock: boolean;
  private _isSearch: string;
  private _dataSource: MatTableDataSource<Stock>;
  private _columnIds: string[] = [];
  private _dataArray: Stock[];
  private _columnObjects: any[];
  private _type: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input()
  public get isStock(): boolean {
    return this._isStock;
  }
  public set isStock(value: boolean) {
    this._isStock = value;
  }

  @Input()
  public get isSearch(): string {
    return this._isSearch;
  }
  public set isSearch(value: string) {
    this._isSearch = value;
  }

  @Input()
  public get dataSource(): MatTableDataSource<Stock> {
    return this._dataSource;
  }
  public set dataSource(ds: MatTableDataSource<Stock>) {
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
  public get dataArray(): Stock[] {
    return this._dataArray;
  }
  public set dataArray(dataArray: Stock[]) {
    this.nanService.mapStockArray(dataArray);
    this._dataArray = dataArray;
  }

  @Input()
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  constructor(
    private httpService: HttpService,
    private nanService: NanService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngAfterViewInit() {
    console.log('table here', this._dataSource);
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth();
    // const day = today.getDate();
    // this.tmpSearchHistory.dateRecorded = new Date(year, month, day);
  }

  public select(value: number): void {
    if (this._isSearch === 'true') {
      this.dataArray[value].email = 'dd@d.com';
      console.log('datararay number', this.dataArray[value]);
      this.dataArray[value];

      // Add Stock
      this.httpService.postStock(GLOBAL.APIURL.addStock, this.dataArray[value]).subscribe(data => {
        // Check if stock Exists
        if (Object.keys(data).length === 0) {
          this.openErrorDialog("Duplicate Error")
        } else { // Confirm item added
          this.openSnackBar('Item added to your list', 'SUCCESS');
        }
        console.log('addstock data', data);
      },
        err => {
          console.log('HTTP Error', err);
        },
        () => console.log('HTTP request completed.'
        ));

    } else {
      console.log('datararay number', this.dataArray[value]);
      this.httpService.deleteStock(GLOBAL.APIURL.deleteStock, this.dataArray[value].symbol).subscribe(data => {
        console.log('addstock data', data);
      });
    }
  }
  resetFields() {
    throw new Error('Method not implemented.');
  }

  // SORTING
  public applyFilter(filterValue: string): void {
    this._dataSource.filter = filterValue.trim().toLowerCase();

    if (this._dataSource.paginator) {
      this._dataSource.paginator.firstPage();
    }
  }

  // DIALOGS AND SNACKBARS
  public openDialog(index: number) {
    const dialogRef = this.dialog.open(ChartComponent, {
      data: {
        keyword: this.dataArray[index]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openErrorDialog(errorMessage: String): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      data: {
        title: errorMessage,
        subtitle: 'Saving stock',
        text: 'You have already saved this stock'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openSnackBar(message: string, title: string): void {
    this.snackBar.open(message, title, {
      duration: 2000,
    });
  }

  public setDataColor(value: number | string) {
    if (typeof value !== 'string') {
      if (value > 0) {
        return '#4bb543'
      } else {
        return '#dd0031';
      }
    } else {
      return;
    }
  }
}