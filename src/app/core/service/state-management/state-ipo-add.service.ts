import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ipo, Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StateIpoAddService {

  // tslint:disable-next-line: variable-name
  private readonly _addIpos = new BehaviorSubject<Ipo[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly addIpos$ = this._addIpos.asObservable();

  // the getter will return the last value emitted in _todos subject
  get addIpos(): Ipo[] {
    return this._addIpos.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  set addIpos(ipo: Ipo[]) {
    this._addIpos.next(ipo);
  }

  add(ipo: Ipo) {
    // we assaign a new copy of todos by adding a new todo to it 
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.addIpos = [
      ...this.addIpos,
      {
        stateId: this.addIpos.length + 1,
        Name: ipo.Name,
        Market: ipo.Market,
        City: ipo.City,
        CEO: ipo.CEO,
        URL: ipo.URL,
        SharesOffered: ipo.SharesOffered,
        PriceLow: ipo.PriceLow,
        PriceHigh: ipo.PriceHigh,
        Revenue: ipo.Revenue,
        NetIncome: ipo.NetIncome,
        TotalAssets: ipo.TotalAssets,
        StockholderEquity: ipo.StockholderEquity,
        CompanyDescription: ipo.CompanyDescription,
        BusinessDescription: ipo.BusinessDescription,
        UseOfProceeds: ipo.UseOfProceeds,
        Competition: ipo.Competition,
        Amount: ipo.Amount,
        PercentOffered: ipo.PercentOffered
      }
    ];
  }

  remove(id: number) {
    this.addIpos = this.addIpos.filter(addIpo => addIpo.stateId !== id);
  }


}
