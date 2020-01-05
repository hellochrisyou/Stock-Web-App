import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { StockDto } from '@shared/interface/dto.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchStockResolveService {

  stockArr: Stock[];
  private _curStock: Stock = {};


  constructor() { }

  resolveStockArray(data: any): Stock[] {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {};
      this.curStock.symbol = data.symbol;
      this.curStock.name = data.name;
      this.curStock.open = data.open;
      this.curStock.low = data.low;
      this.curStock.high = data.high;
      this.curStock.latestPrice = data.latestPrice;
      this.curStock.chnge = data.change;
      this.curStock.chngePrcnt = data.changePercent;
      this.curStock.week52Low = data.week52Low;
      this.curStock.week52High = data.week52High;
      this.curStock.ytdChnge = data.ytdChange;
      this.stockArr.push(this.curStock);
    })
    return this.stockArr;
  }

  public get curStock(): Stock {
    return this._curStock;
  }
  public set curStock(value: Stock) {
    this._curStock = value;
  }
}
