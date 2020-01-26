import { Injectable } from '@angular/core';
import { SearchHistory, Stock } from '@shared/interface/models';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';
import * as GLOBAL from '@shared/const/url.const';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryListService {

  localSearchHistory: SearchHistory;

  constructor(private httpService: HttpService) {
    this.fetchAll;
  }

  private readonly _searchHistory = new BehaviorSubject<SearchHistory[]>([]);

  readonly searchHistory$ = this._searchHistory.asObservable();

  readonly completedSearchHistory$ = this.searchHistory$.pipe(
    map(searchHistory => searchHistory.filter(searchHistory => searchHistory.isCompleted))
  )

  readonly uncompletedSearchHistory$ = this.searchHistory$.pipe(
    map(searchHistory => searchHistory.filter(searchHistory => !searchHistory.isCompleted))
  )

  public get searchHistory(): SearchHistory[] {
    return this._searchHistory.getValue();
  }

  public set searchHistory(val: SearchHistory[]) {
    this._searchHistory.next(val);
  }

  public async addSearchHistory(name: string) {
    this.localSearchHistory = {
      email: 'dd@d.com',
      name: name,
      url: GLOBAL.APIURL.addSearchHistory
    }
    this.searchHistory = [
      ...this.searchHistory,
      this.localSearchHistory
    ];

    this.httpService.postSearchHistory(GLOBAL.APIURL.addSearchHistory, name).subscribe(data => {
      console.log('Data from addSearchHistory', data);
      const searchHistory = data;
      const index = this.searchHistory.indexOf(this.searchHistory.find(searchHistory => searchHistory.name === name));
      this.searchHistory[index] = {
        ...searchHistory
      }
      this.searchHistory = [...this.searchHistory];
    },
      err => {
        console.log('HTTP Error for addSearchHistory: ', err)
        this.removeSearchHistory(name, false);
      },
      () => console.log('HTTP addSearchHistory complete.'
      ));
  }

  public removeSearchHistory(name: string, removeFromServer = true) {
    // optimistic update
    const searchHistory = this.searchHistory.find(h => h.name === name);
    this.searchHistory = this.searchHistory.filter(searchHistory => searchHistory.name !== name);

    if (removeFromServer) {
      this.httpService.delete(GLOBAL.APIURL.deleteSearch, name).subscribe(data => {
        console.log('Data from deleteSearchHistory', data);
      },
        err => {
          console.log('HTTP Error for deleteSearchHistory: ', err)
          this.searchHistory = [...this.searchHistory, searchHistory];
        },
        () => console.log('HTTP deleteSearchHistory complete.'));
    }

  }

  public clearStock() {
    this.searchHistory = [];
  }

  public setCompleted(name: string, isCompleted: boolean) {
    let searchHistory = this.searchHistory.find(todo => todo.name === name);

    if (searchHistory) {

      const index = this.searchHistory.indexOf(searchHistory);
      this.searchHistory[index] = {
        ...searchHistory,
        isCompleted
      }
      this.searchHistory = [...this.searchHistory];
    }
  }

  public fetchAll() {
    this.httpService.getAll(GLOBAL.APIURL.findStocks, 'dd@d.com').subscribe(data => {
      console.log('Data from findAllStocks', data);
      this.searchHistory = data;
    },
      err => console.log('HTTP Error for findAllStocks: ', err),
      () => console.log('Http findAllStocks complete.')
    );
  }
}
