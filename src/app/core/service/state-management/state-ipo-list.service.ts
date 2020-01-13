import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ipo } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StateIpoListService {

  // tslint:disable-next-line: variable-name
  private readonly _ipoList = new BehaviorSubject<Ipo[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly ipoList$ = this._ipoList.asObservable();

  // the getter will return the last value emitted in _todos subject
  get ipoList(): Ipo[] {
    return this._ipoList.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  set ipoList(ipoList: Ipo[]) {
    this._ipoList.next(ipoList);
  }

  public add(ipo: Ipo) {
    // we assaign a new copy of todos by adding a new todo to it 
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.ipoList = [
      ...this.ipoList,
      {
        stateId: this.ipoList.length + 1,
        Name: ipo.Name,
        Market: ipo.Market,
        City: ipo.City,
        CEO: ipo.CEO,
        URL: ipo.URL,
        Revenue: ipo.Revenue,
        StockholderEquity: ipo.StockholderEquity,
        CompanyDescription: ipo.CompanyDescription,
        PercentOffered: ipo.PercentOffered
      }
    ];
  }

  public remove(id: number) {
    this.ipoList = this.ipoList.filter(ipo => ipo.stateId !== id);
  }

}
