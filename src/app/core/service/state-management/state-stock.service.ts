import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateStockService {

  // tslint:disable-next-line: variable-name
  private readonly _stocks = new BehaviorSubject<Stock[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly stocks$ = this._stocks.asObservable();


  // the getter will return the last value emitted in _todos subject
  get stocks(): Stock[] {
    return this._stocks.getValue();
  }

  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set stocks(stock: Stock[]) {
    this._stocks.next(stock);
  }

  addStock(stock: Stock) {
    // we assaign a new copy of todos by adding a new todo to it
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.stocks = [
      ...this.stocks,
      { stateId: this.stocks.length + 1 }
    ];
  }

  removeStock(id: number) {
    this.stocks = this.stocks.filter(stock => stock.stateId !== id);
  }

}
