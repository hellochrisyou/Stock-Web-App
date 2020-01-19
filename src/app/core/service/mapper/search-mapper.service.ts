import { Injectable } from '@angular/core';
import { Ipo, SearchHistory } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class SearchMapperService {

  // tslint:disable-next-line: variable-name
  private searchArr: SearchHistory[];

  current: SearchHistory = {
    email: 'dd@d.com'
  };

  constructor() { }

  public mapSearchArray(data: any): SearchHistory[] {
    this.searchArr = [];
    data.forEach(x => {
      this.current = {
        email: 'dd@d.com'
      };
        this.current.name = x.name,        
      this.searchArr.push(this.current);
    });
    return this.searchArr;
  }
}

