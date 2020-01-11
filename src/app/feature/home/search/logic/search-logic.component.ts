import { Component, OnInit } from '@angular/core';
import { ColumnObject } from '@shared/interface/interface';
import { MatTableDataSource } from '@angular/material';
import { Stock, Ipo } from '@shared/interface/models';
import { HttpService } from 'app/core/service/api/http.service';
import { SearchStockResolveService } from 'app/core/service/resolve/search-stock.resolve.service';
import { SearchIpoResolveService } from 'app/core/service/resolve/search-ipo.resolve.service';
import { STOCK_COL_OBJ, IPO_COL_OBJ } from '@shared/const/column.const';
import { SearchCacheIpoService } from 'app/core/service/cache/search-cache-ipo.service';
import { SearchCacheStockService } from 'app/core/service/cache/search-cache-stock.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-stock',
  templateUrl: './search-logic.component.html',
  styleUrls: ['./search-logic.component.scss']
})
export class SearchLogicComponent implements OnInit {

  dataArr: Stock[] | Ipo[];
  isStock: boolean;
  tmpAccount: Account;
  tmpMat: MatTableDataSource<Stock | Ipo>;
  colObj: ColumnObject[];
  isSearch = true;

  constructor(
    private httpService: HttpService,
    private searchStockResolveService: SearchStockResolveService,
    private searchIpoResolveService: SearchIpoResolveService,
    private searchCacheStockService: SearchCacheStockService,
    private searchCacheIpoService: SearchCacheIpoService
  ) { }

  ngOnInit() {

  }

  onSubmit(value: string) {
    if (value.includes('collection')) {
      const newValue = value.slice(31);
      this.colObj = STOCK_COL_OBJ;
      this.isStock = true;
      if (this.searchCacheStockService.isExist(newValue)) {
        this.dataArr = this.searchCacheStockService.stocks;
        this.tmpMat = new MatTableDataSource(this.searchCacheStockService.stocks);
      } else {
        this.httpService.get(value).subscribe(data => {
          this.tmpMat = new MatTableDataSource(this.searchStockResolveService.resolveStockArray(data));
          this.dataArr = this.searchStockResolveService.stockArr;
          if (!this.searchCacheStockService.isExist(newValue)) {
            this.dataArr.forEach(x => {
              x.Select = newValue;
              this.searchCacheStockService.addStock(x);
            })
          }

        })
      };
    } else {
      this.colObj = IPO_COL_OBJ;
      this.isStock = false;
      if (this.searchCacheIpoService.isExist(value)) {
        this.dataArr = this.searchCacheIpoService.ipos;
        this.tmpMat = new MatTableDataSource(this.searchCacheIpoService.ipos);
      } else {
        this.httpService.get(value).subscribe(data => {
          this.tmpMat = new MatTableDataSource(this.searchIpoResolveService.resolveIpoArray(data));
          this.dataArr = this.searchIpoResolveService.ipoArr;
          if (!this.searchCacheIpoService.isExist(value)) {
            this.dataArr.forEach(x => {
              x.Select = value;
              this.searchCacheIpoService.addIpo(x);
            });
          }
        });
      }
    }
  }
}
