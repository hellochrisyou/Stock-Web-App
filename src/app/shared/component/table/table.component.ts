import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartComponent } from '@shared/dialog/chart/chart.component';
import { Ipo, Stock, BaseHistory, Response_History, APIRequestStatus, HistoryInput } from '@shared/interface/models';
import { FirebaseService } from 'app/core/service/crud/firebase.service';
import { StateIpoAddService } from 'app/core/service/state-management/state-ipo-add.service';
import { StateStockAddService } from 'app/core/service/state-management/state-stock-add.service';
import { Apollo } from 'apollo-angular';
import { ADD_SEARCH_HISTORY } from '@shared/graphQL/query/mutation/history.mutation';
import { of, throwError } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { subscribe } from 'graphql';
import { GRAPHQL_ERROR } from '@shared/const/error.const';
import { HistoryService } from 'app/core/service/graphQL/history.service';

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

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private firebaseService: FirebaseService,
    private snackBar: MatSnackBar,
    private stateStockddService: StateStockAddService,
    private stateIpoddService: StateIpoAddService,
    public dialog: MatDialog,
    private historyService: HistoryService
  ) { }

  tmpSearchHistory: HistoryInput = {
    email: 'dd@d.com',
    title: '',
    type: 'Stock',
    dateRecorded: new Date()
  }
  tmpSHArr: BaseHistory[] =[];
  ngOnInit() {
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth();
    // const day = today.getDate();
    // this.tmpSearchHistory.dateRecorded = new Date(year, month, day);
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
        //   // Add Stock
        //   this.firebaseService.addStock(this.dataArray[value])
        //     .then(
        //       res => {
        //         this.resetFields();
        //         // use snack bar
        //       }
        //     )
        this.tmpSearchHistory.title = 'yahoo';
        this.stateStockddService.add(this.dataArray[value]);
        // this.tmpSHArr.push(this.tmpSearchHistory);
        const searchHisArr = this.tmpSearchHistory;
        this.historyService.mutate(this.tmpSearchHistory)
        .subscribe();
      } else {
        //   // Add Ipo
        //   this.firebaseService.addIpo(this.dataArray[value])
        //     .then(
        //       res => {
        //         this.resetFields();
        //         // use snack bar
        //       }
        //     )
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
