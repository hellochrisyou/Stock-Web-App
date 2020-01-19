import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchHistory } from '@shared/interface/models';
import { MatTableDataSource } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { SEARCH_COL_OBJ } from '@shared/const/column.const';
import { HttpService } from 'app/core/service/http/http.service';
import { SearchMapperService } from 'app/core/service/mapper/search-mapper.service';
import * as GLOBAL from '@shared/const/url.const';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {

  searchArr: SearchHistory[] = [];
  searchMat: MatTableDataSource<SearchHistory>;
  searchCol: ColumnObject[] = SEARCH_COL_OBJ;

  @Output() clearSearchHistory = new EventEmitter<boolean>();

  constructor(
    private httpService: HttpService,
    private searchMapperService: SearchMapperService,
  ) { }

  ngOnInit() {
    this.httpService.getAll(GLOBAL.APIURL.findSearchHistory, 'dd@d.com').subscribe( data => {
      this.searchArr = this.searchMapperService.mapSearchArray(data);
      this.searchMat = new MatTableDataSource(this.searchArr);
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.'
    ));
  }

  public emitClearStockHistory() {
    this.clearSearchHistory.emit(true);
  }
}
