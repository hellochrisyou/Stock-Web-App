import { Injectable } from '@angular/core';
import { Ipo, SearchHistory, StockHistory } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StockHistoryMapperService {

  // tslint:disable-next-line: variable-name
  private stockArr: StockHistory[];

  current: StockHistory = {
    email: 'dd@d.com'
  };

  constructor() { }

  public mapStockHistoryArray(data: any): StockHistory[] {
    this.stockArr = [];
    data.forEach(x => {
      this.current = {
        email: 'dd@d.com'
      };
        this.current.name = x.name,        
      this.stockArr.push(this.current);
    });
    return this.stockArr;
  }
}

