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

      this.curIpo.symbol = data.symbol,
        this.curIpo.coName = data.companyName,
        this.curIpo.city = data.city,
        this.curIpo.state = data.state,
        this.curIpo.ceo = data.ceo,
        this.curIpo.url = data.url,
        this.curIpo.sharesOffered = data.sharesOffered,
        this.curIpo.priceLow = data.priceLow,
        this.curIpo.priceHigh = data.priceHigh,
        this.curIpo.revenue = data.revenue,
        this.curIpo.netIncome = data.netIncome,
        this.curIpo.totalAssets = data.totalAssets,
        this.curIpo.stockholderEquity = data.stockholderEquity,
        this.curIpo.companyDescription = data.companyDescription,
        this.curIpo.businessDescription = data.businessDescription,
        this.curIpo.useOfProceeds = data.useOfProceeds,
        this.curIpo.competition = data.competition,
        this.curIpo.amount = data.amount,
        this.curIpo.percentOffered = data.percentOffered

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