import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { StockDto } from '@shared/interface/dto.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchStockResolveService {

  stockArr: Stock[];
  // tslint:disable-next-line: variable-name
  private _curStock: Stock = {
    Select: 'Select',
    Chart: 'Chart'
  };


  constructor() { }

  resolveStockArray(data: any): Stock[] {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {
        Select: 'Select',
        Chart: 'Chart'
      };
      this.curStock.Symbol = x.symbol;
      this.curStock.Exchange = x.primaryExchange;
      this.curStock.Name = x.companyName;
      this.curStock.Open = x.open;
      this.curStock.Low = x.low;
      this.curStock.High = x.high;
      this.curStock.LatestPrice = x.latestPrice;
      this.curStock.Change = x.change;
      this.curStock.ChangePercent = x.changePercent;
      this.curStock.Week52Low = x.week52Low;
      this.curStock.Week52High = x.week52High;
      this.curStock.YtdChange = Math.round(x.ytdChange * 100000) / 100000

        ;
      this.stockArr.push(this.curStock);
    });
    return this.stockArr;
  }

  public get curStock(): Stock {
    return this._curStock;
  }
  public set curStock(value: Stock) {
    this._curStock = value;
  }
}
