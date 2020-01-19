import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartComponent } from '@shared/dialog/chart/chart.component';
import { BaseHistory, Ipo, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/api/http.service';
import { StateIpoAddService } from 'app/core/service/state-management/state-ipo-add.service';
import * as GLOBAL from '@shared/const/url.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _isStock: boolean;
  // tslint:disable-next-line: variable-name
  private _isSearch: string;
  // tslint:disable-next-line: variable-name
  private _dataSource: MatTableDataSource<Stock | Ipo>;
  // tslint:disable-next-line: variable-name
  private _columnIds: string[] = [];
  // tslint:disable-next-line: variable-name
  private _dataArray: any[];
  // tslint:disable-next-line: variable-name
  private _columnObjects: any[];
  private _type: string;

  router: any;

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

  @Input()
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(    
    private snackBar: MatSnackBar,
    private stateIpoddService: StateIpoAddService,
    private httpService: HttpService,
    public dialog: MatDialog
  ) { }

  tmpSearchHistory: BaseHistory = {
    email: 'dd@d.com',
    title: '',
    type: 'Stock',
    // dateRecorded: new Date()
  }
  tmpSearchArr: BaseHistory[] = [];
  ngOnInit() {
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth();
    // const day = today.getDate();
    // this.tmpSearchHistory.dateRecorded = new Date(year, month, day);
    this.httpService.getAll(GLOBAL.APIURLS.findAllHistory, this.type).subscribe( data => {
      console.log('data returned from addsearchhistor', data); 
     });
  }


  public applyFilter(filterValue: string): void {
    this._dataSource.filter = filterValue.trim().toLowerCase();

    if (this._dataSource.paginator) {
      this._dataSource.paginator.firstPage();
    }
  }

  public select(value: number): void {
    if (this.isSearch) {
      // Add
      if (this.isStock) {

        this.tmpSearchHistory.title = 'yahoo';
        this.tmpSearchArr.push(this.tmpSearchHistory);

        this.tmpSearchHistory = {
          email: 'dd@d.com',
          title: '',
          type: 'Stock',
          // dateRecorded: new Date()
        } 


        this.stateIpoddService.add(this.dataArray[value]);
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
    throw new Error('Method not implemented.');
  }

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

  public openSnackBar(message: string, title: string): void {
    this.snackBar.open(message, title, {
      duration: 2000,
    });
  }
}
