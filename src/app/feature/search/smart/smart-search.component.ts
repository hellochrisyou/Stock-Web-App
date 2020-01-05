import { Component, OnInit } from '@angular/core';
import { ColumnObject } from '@shared/interface/interface';
import { MatTableDataSource } from '@angular/material';
import { Stock, Ipo } from '@shared/interface/models';
import { HttpService } from 'app/core/service/api/http.service';
import { SearchStockResolveService } from 'app/core/service/resolve/search-stock.resolve.service';
import { SearchIpoResolveService } from 'app/core/service/resolve/search-ipo.resolve.service';
import { STOCK_COL_OBJ, IPO_COL_OBJ } from '@shared/const/column.const';

@Component({
  selector: 'search-stock',
  templateUrl: './smart-search.component.html',
  styleUrls: ['./smart-search.component.scss']
})
export class SmartSearchComponent implements OnInit {

  dataArr: Stock[] | Ipo[] = [];
  isStock: boolean;
  tmpAccount: Account;
  tmpMat: MatTableDataSource<Stock | Ipo>;
  colObj: ColumnObject[];
  isSearch = true;

  constructor(
    private httpService: HttpService,
    private searchStockResolveService: SearchStockResolveService,
    private searchIpoResolveService: SearchIpoResolveService
  ) { }

  ngOnInit() {

  }

  onSubmit(value: string) {
    if (value.includes('collection')) {
      this.httpService.get(value).subscribe(data => {
        this.tmpMat = new MatTableDataSource(this.searchStockResolveService.resolveStockArray(data));
        this.colObj = STOCK_COL_OBJ;
        this.isStock = true;
        this.dataArr = this.searchStockResolveService.stockArr;
      });
    } else {
      this.httpService.get(value).subscribe(data => {
        this.tmpMat = new MatTableDataSource(this.searchIpoResolveService.resolveIpoArray(data));
        this.colObj = IPO_COL_OBJ;
        this.isStock = false;
        this.dataArr = this.searchIpoResolveService.ipoArr;
      });
    }
  }
}
