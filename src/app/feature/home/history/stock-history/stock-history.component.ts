import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StockHistory, SearchHistory } from '@shared/interface/models';
import { MatTableDataSource } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { SEARCH_COL_OBJ, STOCK_HISTORY_COL_OBJ } from '@shared/const/column.const';
import { HttpService } from 'app/core/service/http/http.service';
import { SearchMapperService } from 'app/core/service/mapper/search-mapper.service';
import * as GLOBAL from '@shared/const/url.const';
import { StockHistoryMapperService } from 'app/core/service/mapper/stock-history-mapper.service';

@Component({
  selector: 'stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.scss']
})
export class StockHistoryComponent implements OnInit {
  
  stockArr: StockHistory[] = [];
  stockMat: MatTableDataSource<StockHistory>;
  stockCol: ColumnObject[] = STOCK_HISTORY_COL_OBJ;

  @Output() clearStockHistory = new EventEmitter<boolean>();

  constructor(
    private httpService: HttpService,
    private stockHistoryMapperService: StockHistoryMapperService,
  ) { }

  ngOnInit() {
    this.httpService.getAll(GLOBAL.APIURL.findStockHistory, 'dd@d.com').subscribe( data => {
      this.stockArr = this.stockHistoryMapperService.mapStockHistoryArray(data);
      this.stockMat = new MatTableDataSource(this.stockArr);
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  public emitClearStockHistory() {
    this.clearStockHistory.emit(true);
  }
}
