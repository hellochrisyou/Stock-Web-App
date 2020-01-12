import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ipo, Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StateIpoRemoveService {

  // tslint:disable-next-line: variable-name
  private readonly _rmIpos = new BehaviorSubject<Ipo[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly rmIpos$ = this._rmIpos.asObservable();

  // the getter will return the last value emitted in _todos subject
  get rmIpos(): Ipo[] {
    return this._rmIpos.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  set rmIpos(ipo: Ipo[]) {
    this._rmIpos.next(ipo);
  }

  add(ipo: Ipo) {
    // we assaign a new copy of todos by adding a new todo to it 
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.rmIpos = [
      ...this.rmIpos,
      {
        stateId: this.rmIpos.length + 1,
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
    this.rmIpos = this.rmIpos.filter(rmIpo => rmIpo.stateId !== id);
  }


}
