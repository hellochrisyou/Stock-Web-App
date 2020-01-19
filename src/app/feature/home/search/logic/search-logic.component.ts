import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HISTORY_COL_OBJ, IPO_COL_OBJ, STOCK_COL_OBJ } from '@shared/const/column.const';
import { ColumnObject } from '@shared/interface/interface';
import { BaseHistory, Ipo, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/api/http.service';
import * as GLOBAL from '@shared/const/url.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-stock',
  templateUrl: './search-logic.component.html',
  styleUrls: ['./search-logic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchLogicComponent implements AfterViewInit {

  isSearch = 'yes';
  isStock: boolean;
  tmpAccount: Account;

  searchDataArr: Stock[] | Ipo[];
  historyDataArr: BaseHistory[] = [];

  searchMat: MatTableDataSource<Stock | Ipo>;
  historyMat: MatTableDataSource<BaseHistory>;

  historyColObj: ColumnObject[] = HISTORY_COL_OBJ;
  searchColObj: ColumnObject[];

  saveHistory: BaseHistory = {
    email: 'dd@d.com',
    title: '',
    type: 'Search',
    // dateRecorded: new Date()
  }

  constructor(
    private httpService: HttpService,
  ) { }

  ngAfterViewInit() {
    // service to pull in data for search history from spring via graphql
    // Data is expected to be an object, with keys that match the requested root fields in your document (pos in this case). 
    // Apollo expects to a value at data.pos, but since data is an array and doesn't have this property, it returns undefined.
  }

  public onSubmit(value: string): void {
    console.log('reached here', value);
    if (value.includes('collection')) {
      const newValue = value.slice(31);
      this.searchColObj = STOCK_COL_OBJ;
      this.isStock = true;
    }
    this.httpService.get(value).subscribe( data => {
      console.log('Data retrieved from Api')
      this.addSearchHistory(value);
      }
    );
  }

  public addSearchHistory(searchName: string) {
    this.saveHistory.title = searchName;
    this.httpService.post(GLOBAL.APIURLS.addHistory, this.saveHistory).subscribe( data => {
     console.log('data returned from addsearchhistor', data); 
    }
      );
  }
}
