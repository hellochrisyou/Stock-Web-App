import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { StockDto } from '@shared/interface/dto.interface';

@Injectable({
  providedIn: 'root'
})
export class StockMapperService {

  stockArr: Stock[];
  curStock: Stock = {
    Select: 'Select',
    Chart: 'Chart'
  };


  constructor() { }

  public mapStockArray(data: any): Stock[] {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {
        Select: 'Select',
        Chart: 'Chart'
      };
      this.curStock.symbol = x.symbol;
      this.curStock.exchange = x.primaryExchange;
      this.curStock.name = x.companyName;
      this.curStock.open = x.open;
      this.curStock.low = x.low;
      this.curStock.high = x.high;
      this.curStock.latestPrice = x.latestPrice;
      this.curStock.change = x.change;
      this.curStock.changePercent = x.changePercent;
      this.curStock.week52Low = x.week52Low;
      this.curStock.week52High = x.week52High;
      this.curStock.ytdChange = Math.round(x.ytdChange * 100000) / 100000
        ;
      this.stockArr.push(this.curStock);
    });
    return this.stockArr;
  }
}
