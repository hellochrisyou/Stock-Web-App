import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StockListService {

  private readonly _stocks = new BehaviorSubject<Stock[]>([]);

  readonly stocks$ = this._stocks.asObservable();

  public get stocks(): Stock[] {
    return this._stocks.getValue();
  }

  public set stocks(val: Stock[]) {
    this._stocks.next(val);
  }

  addStock(stock: Stock) {
    this.stocks.push(stock);
  }

  removeStock(symbol: string) {
    this.stocks = this.stocks.filter(stock => stock.symbol !== symbol);
  }
}
