import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Ipo, Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  public getStocks() {
    return this.db.collection('stock').valueChanges()
  }

  public getIpos() {
    return this.db.collection('IPO').valueChanges()
  }

  public addStock(value: Stock): Promise<DocumentReference> {
    return this.db.collection('stock').add({
      change: value.Change,
      exchange: value.Exchange,
      changePercent: value.ChangePercent,
      high: value.High,
      latestPrice: value.LatestPrice,
      low: value.Low,
      name: value.Name,
      open: value.Open,
      symbol: value.Symbol,
      week52Low: value.Week52Low,
      week52High: value.Week52High,
      ytdChange: value.YtdChange
    });
  }

  public addIpo(value: Ipo): Promise<DocumentReference> {
    return this.db.collection('IPO').add({
      amount: value.Amount,
      businessDesc: value.BusinessDescription,
      ceo: value.CEO,
      city: value,
      cmpnyDesc: value.CompanyDescription,
      coName: value.Name,
      competition: value.Competition,
      market: value.Market,
      netIncome: value.NetIncome,
      percentOffered: value.PercentOffered,
      priceHigh: value.PriceHigh,
      priceLow: value.PriceLow,
      revenue: value.Revenue,
      sharedOffered: value.SharesOffered,
      state: value.State,
      stockholderEquity: value.StockholderEquity,
      symbol: value.Symbol,
      totalAssets: value.TotalAssets,
      url: value.URL,
      useOfProceeds: value.UseOfProceeds
    });
  }

  // updateUser(userKey, value) {
  //   value.nameToSearch = value.name.toLowerCase();
  //   return this.db.collection('users').doc(userKey).set(value);
  // }

  // deleteUser(userKey) {
  //   return this.db.collection('users').doc(userKey).delete();
  // }

  // getUsers() {
  //   return this.db.collection('users').snapshotChanges();
  // }

  // searchUsers(searchValue) {
  //   return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value) {
  //   return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }
}
