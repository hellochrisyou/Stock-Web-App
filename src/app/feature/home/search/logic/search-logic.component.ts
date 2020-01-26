import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { STOCK_COL_OBJ } from '@shared/const/column.const';
import * as GLOBAL from '@shared/const/url.const';
import { ColumnObject } from '@shared/interface/interface';
import { SearchHistory, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/http/http.service';
import { StockMapperService } from 'app/core/service/mapper/stock-mapper.service';
import { ErrorComponent } from '@shared/dialog/error/error.component';
import { NanService } from 'app/core/service/mapper/nan.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-stock',
  templateUrl: './search-logic.component.html',
  styleUrls: ['./search-logic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchLogicComponent implements OnInit {

  isSearch = 'true';
  tmpAccount: Account;

  stockArr: Stock[];
  stockMat: MatTableDataSource<Stock>;
  stockCol: ColumnObject[] = STOCK_COL_OBJ;

  saveHistory: SearchHistory = {
    email: 'dd@d.com',
    name: '',
    // dateRecorded: new Date()
  }

  constructor(
    private httpService: HttpService,
    private stockMapperService: StockMapperService,
    public dialog: MatDialog,
    private nanService: NanService,
  ) { }

  ngOnInit() {
    // service to pull in data for search history from spring via graphql
    // Data is expected to be an object, with keys that match the requested root fields in your document (pos in this case). 
    // Apollo expects to a value at data.pos, but since data is an array and doesn't have this property, it returns undefined.

  }

  public onSubmit(value: string): void {
    console.log('reached here', value);

    this.httpService.postSearchHistory(GLOBAL.APIURL.addSearchHistory, value).subscribe(data => {
      console.log('post search', data);
      
    },
      err => console.log(err),
      () => console.log('HTTP request completed.'
      ));

    this.httpService.getIex(value).subscribe(data => {
      this.stockArr = this.stockMapperService.mapStockArray(data);
      this.stockArr= this.nanService.mapStockArray(this.stockArr);
      this.stockMat = new MatTableDataSource(this.stockArr);
      console.log('Data retrieved from Api', this.stockArr);
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }


}
