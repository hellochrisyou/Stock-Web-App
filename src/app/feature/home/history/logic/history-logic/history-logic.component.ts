import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/core/service/http/http.service';
import * as GLOBAL from '@shared/const/url.const';

@Component({
  selector: 'history-logic',
  templateUrl: './history-logic.component.html',
  styleUrls: ['./history-logic.component.scss']
})
export class HistoryLogicComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  public clearSearchHistory(value: boolean): void {
    this.httpService.postClearHistory(GLOBAL.APIURL.addSearchHistory, 'Search').subscribe( data => {
      console.log ('clear search history data', data);
    },
    err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'));
  }

  public clearStockHistory(value: boolean): void {
    this.httpService.postClearHistory(GLOBAL.APIURL.addSearchHistory, 'Stock').subscribe( data => {
      console.log ('clear search history data', data);
    },
    err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.')
    );
  }
}
