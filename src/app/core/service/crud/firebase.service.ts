import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Ipo, Stock, SearchHistory, ActivityHistory } from '@shared/interface/models';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  public getStocks() {
    return this.db.collection('Stocks').valueChanges();
  }

  public getIpos() {
    return this.db.collection('Ipo').valueChanges();
  }

  public getSearchHistory() {
    return this.db.collection('SearchHistory').valueChanges();
  }

  public getActivityHistory() {
    return this.db.collection('ActvityHistory').valueChanges();
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

  public addSearchHistory(value: SearchHistory): Promise<DocumentReference> {
    return this.db.collection('SearchHistory').add({
      email: value.email,
      title: value.title,
      givenDate: value.givenDate
    });
  }

  public addActivityHistory(value: ActivityHistory): Promise<DocumentReference> {
    return this.db.collection('SearchHistory').add({
      email: value.email,
      title: value.move,
      givenDate: value.givenDate
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
