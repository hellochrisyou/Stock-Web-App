import { Injectable } from '@angular/core';
import { Stock, Ipo } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class SearchIpoResolveService {

  private _ipoArr: Ipo[];

  curIpo: Ipo = {};

  constructor() { }

  resolveIpoArray(data: any): Ipo[] {
    this.ipoArr = [];
    data.forEach(x => {
      this.curIpo = {};

      this.curIpo.Symbol = x.symbol,
        this.curIpo.Name = x.companyName,
        this.curIpo.City = x.city,
        this.curIpo.State = x.state,
        this.curIpo.CEO = x.ceo,
        this.curIpo.URL = x.url,
        this.curIpo.SharesOffered = x.sharesOffered,
        this.curIpo.PriceLow = x.priceLow,
        this.curIpo.PriceHigh = x.priceHigh,
        this.curIpo.Revenue = x.revenue,
        this.curIpo.NetIncome = x.netIncome,
        this.curIpo.TotalAssets = x.totalAssets,
        this.curIpo.StockholderEquity = x.stockholderEquity,
        this.curIpo.CompanyDescription = x.companyDescription,
        this.curIpo.BusinessDescription = x.businessDescription,
        this.curIpo.UseOfProceeds = x.useOfProceeds,
        this.curIpo.Competition = x.competition,
        this.curIpo.Amount = x.amount,
        this.curIpo.PercentOffered = x.percentOffered

      this.ipoArr.push(this.curIpo);
    })
    return this.ipoArr;
  }

  public get ipoArr(): Ipo[] {
    return this._ipoArr;
  }
  public set ipoArr(value: Ipo[]) {
    this._ipoArr = value;
  }


}