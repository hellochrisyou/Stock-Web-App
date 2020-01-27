import { Component, Input, OnInit, ViewChild, AfterViewInit, AfterViewChecked, AfterContentChecked, DoCheck, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
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
import { expandRowTransition } from 'app/core/animation';
import { COLS_DISPLAY } from '@shared/const/column.const';
import { BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [expandRowTransition]
})
export class TableComponent implements OnInit {

  tmpSearchArr: SearchHistory[] = [];
  expandRow: Stock;
  columns_display = COLS_DISPLAY;


  private _isStock: boolean;
  private _isSearch: string;
  public dataSource: MatTableDataSource<Stock>;
  public index: number;
  private _columnIds: string[] = [];
  private _columnObjects: any[];
  private _type: string;
  private _dataArray: Stock[];

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
  public get dataArray(): Stock[] {
    return this._dataArray;
  }
  public set dataArray(value: Stock[]) {
    this._dataArray = value;
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
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('table here', this.dataArray);
    this.dataSource = new MatTableDataSource<Stock>(this.dataArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // if (this.isSearch) {
    //   this.dataArray = this.stockListService.stocks$;
    // }
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth();
    // const day = today.getDate();
    // this.tmpSearchHistory.dateRecorded = new Date(year, month, day);

  }

  public select(value: number): void {
    if (this._isSearch === 'true') {
      console.log('select value: ', value);
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
        console.log('Data from addStock', data);
      },
        err => console.log('HTTP Error for addStock: ', err),
        () => console.log('HTTP addStock complete.')        
      );

    } else {
      this.httpService.delete(GLOBAL.APIURL.deleteStock, this.dataArray[value].symbol).subscribe(data => {
        console.log('Data from deleteStock', data);
        this.dataArray = this.dataArray.filter(obj => obj !== this.dataArray[value]);
        this.dataSource = new MatTableDataSource<Stock>(this.dataArray);
        this.changeDetectorRefs.detectChanges();
      },
        err => console.log('HTTP Error for deleteStock: ', err),
        () => console.log('HTTP addStock deleteStock.') 
      );
    }
  }

  // SORTING
  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // DIALOGS AND SNACKBARS
  public openDialog(index: number, increment: string) {
    const dialogRef = this.dialog.open(ChartComponent, {
      data: {
        keyword: this.dataArray[index],
        increment: increment
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