import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HISTORY_COL_OBJ, IPO_COL_OBJ, STOCK_COL_OBJ } from '@shared/const/column.const';
import { ColumnObject } from '@shared/interface/interface';
import { Ipo, SearchHistory, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/api/http.service';
import { SearchCacheIpoService } from 'app/core/service/cache/search-cache-ipo.service';
import { SearchCacheStockService } from 'app/core/service/cache/search-cache-stock.service';
import { SearchIpoResolveService } from 'app/core/service/resolve/search-ipo.resolve.service';
import { SearchStockResolveService } from 'app/core/service/resolve/search-stock.resolve.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-stock',
  templateUrl: './search-logic.component.html',
  styleUrls: ['./search-logic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchLogicComponent implements OnInit {

  isSearch = 'yes';
  isStock: boolean;
  tmpAccount: Account;

  searchDataArr: Stock[] | Ipo[];
  historyDataArr: SearchHistory[];

  searchMat: MatTableDataSource<Stock | Ipo>;
  historyMat: MatTableDataSource<SearchHistory>;

  historyColObj: ColumnObject[] = HISTORY_COL_OBJ;
  searchColObj: ColumnObject[];

  constructor(
    private httpService: HttpService,
    private searchStockResolveService: SearchStockResolveService,
    private searchIpoResolveService: SearchIpoResolveService,
    private searchCacheStockService: SearchCacheStockService,
    private searchCacheIpoService: SearchCacheIpoService,

  ) { }

  ngOnInit() {
    // service to pull in data for search history from spring via graphql
  }

  onSubmit(value: string) {
    console.log('reached here', value);
    if (value.includes('collection')) {
      const newValue = value.slice(31);
      this.searchColObj = STOCK_COL_OBJ;
      this.isStock = true;
      if (this.searchCacheStockService.isExist(newValue)) {
        this.searchDataArr = this.searchCacheStockService.stocks;
        this.searchMat = new MatTableDataSource(this.searchCacheStockService.stocks);
      } else {
        // SEARCH COLLECTION API CALLED.  CALL ADD SEARCHHISTORY
        this.httpService.get(value).subscribe(data => {
          console.log('data here', this.searchStockResolveService.resolveStockArray(data));
          this.searchMat = new MatTableDataSource(this.searchStockResolveService.resolveStockArray(data));
          this.searchDataArr = this.searchStockResolveService.stockArr;
          if (!this.searchCacheStockService.isExist(newValue)) {
            this.searchDataArr.forEach(x => {
              x.Select = newValue;
              this.searchCacheStockService.addStock(x);
            });
          } else {
            this.searchColObj = IPO_COL_OBJ;
            this.isStock = false;
            if (this.searchCacheIpoService.isExist(value)) {
              this.searchDataArr = this.searchCacheIpoService.ipos;
              this.searchMat = new MatTableDataSource(this.searchCacheIpoService.ipos);
            } else {
              // SEARCH IPO API CALLED
              this.httpService.get(value).subscribe(data => {
                this.searchMat = new MatTableDataSource(this.searchIpoResolveService.resolveIpoArray(data));
                this.searchDataArr = this.searchIpoResolveService.ipoArr;
                if (!this.searchCacheIpoService.isExist(value)) {
                  this.searchDataArr.forEach(x => {
                    x.Select = value;
                    this.searchCacheIpoService.addIpo(x);
                  });
                }
              });
            }
          }
        })
      }
    }
  }
}
