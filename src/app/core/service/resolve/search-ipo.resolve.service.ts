import { Injectable } from '@angular/core';
import { Stock, Ipo } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class SearchIpoResolveService {

  // tslint:disable-next-line: variable-name
  private _ipoArr: Ipo[];

  curIpo: Ipo = {
    Select: 'Select'
  };

  constructor() { }

  resolveIpoArray(data: any): Ipo[] {
    this.ipoArr = [];
    data.forEach(x => {
      this.curIpo = {
        Select: 'Select'
      };

      this.curIpo.Symbol = x.symbol,
        this.curIpo.Name = x.companyName,
        this.curIpo.City = x.city,
        this.curIpo.State = x.state,
        this.curIpo.CEO = x.ceo,
        this.curIpo.URL = x.url,
        this.curIpo.Revenue = x.revenue,
        this.curIpo.StockholderEquity = x.stockholderEquity,
        this.curIpo.CompanyDescription = x.companyDescription,
        this.curIpo.PercentOffered = x.percentOffered;

      this.ipoArr.push(this.curIpo);
    });
    return this.ipoArr;
  }

  public get ipoArr(): Ipo[] {
    return this._ipoArr;
  }
  public set ipoArr(value: Ipo[]) {
    this._ipoArr = value;
  }
}

