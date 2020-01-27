import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/core/service/http/http.service';
import * as GLOBAL from '@shared/const/url.const';
import { SearchHistory } from '@shared/interface/models';
import { MatTableDataSource } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { SEARCH_COL_OBJ } from '@shared/const/column.const';
import { SearchMapperService } from 'app/core/service/mapper/search-mapper.service';

@Component({
  selector: 'history-logic',
  templateUrl: './history-logic.component.html',
  styleUrls: ['./history-logic.component.scss']
})
export class HistoryLogicComponent implements OnInit {
 
  searchArr: SearchHistory[];
  searchCol: ColumnObject[] = SEARCH_COL_OBJ;
  
  constructor(
    private httpService: HttpService,
    private searchMapperService: SearchMapperService,
  ) { }

  ngOnInit() {
    
      this.httpService.getAll(GLOBAL.APIURL.findSearchHistory, 'dd@d.com').subscribe( data => {
        console.log ('Data from FindAlLSearchHistory', data);
        this.searchArr = [];
        this.searchArr = this.searchMapperService.mapSearchArray(data);
      },
      err => console.log('HTTP Error for FindAlLSearchHistory', err),
      () => console.log('HTTP FindAlLSearchHistory completed.'));
  }

  public clearSearchHistory(value: boolean): void {
    this.httpService.postClearHistory(GLOBAL.APIURL.addSearchHistory, 'Search').subscribe( data => {
      console.log ('clear search history data', data);
    },
    err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'));
  }  
}
