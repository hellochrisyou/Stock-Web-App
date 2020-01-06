import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class SearchCacheStockService {

  private stockStore: Stock[] = [];
  private _stocks: Stock[];

  public get stocks(): Stock[] {
    return this._stocks;
  }
  public set stocks(value: Stock[]) {
    this._stocks = value;
  }

  public addStock(stock: Stock): void {
    this.stockStore.push(stock);
  }

  public resetStock(): void {
    this._stocks = []
  }

  public isExist(select: string): boolean {
    this.resetStock();
    let check;
    this.stockStore.forEach(stockArr => {
      if (stockArr.Select === select) {
        this._stocks.push(stockArr);
        check = true;
      }
    });
    if (check === true) {
      return true;
    } else {
      return false;
    }
  }
}
