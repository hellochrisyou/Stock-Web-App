import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateStockListService {

  // tslint:disable-next-line: variable-name
  private readonly _stockList = new BehaviorSubject<Stock[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly stockList$ = this._stockList.asObservable();

  // the getter will return the last value emitted in _todos subject
  get stockList(): Stock[] {
    return this._stockList.getValue();
  }

  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set stockList(stock: Stock[]) {
    this._stockList.next(stock);
  }

  constructor(private stateStockListService: StateStockListService) { }

  public add(stock: Stock) {
    // we assaign a new copy of todos by adding a new todo to it
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.stockList = [
      ...this.stockList,
      {
        stateId: this.stockList.length + 1,
        Symbol: stock.Symbol,
        Name: stock.Name,
        Exchange: stock.Exchange,
        Open: stock.Open,
        Low: stock.Low,
        High: stock.High,
        LatestPrice: stock.LatestPrice,
        Change: stock.Change,
        ChangePercent: stock.ChangePercent,
        Week52Low: stock.Week52Low,
        Week52High: stock.Week52High,
        YtdChange: stock.YtdChange,
      }
    ];
  }

  public remove(id: number) {
    this.stockList = this.stockList.filter(stock => stock.stateId !== id);
  }
}
