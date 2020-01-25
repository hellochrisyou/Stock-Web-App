import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { STOCK_COL_OBJ } from '@shared/const/column.const';
import * as GLOBAL from '@shared/const/url.const';
import { ColumnObject } from '@shared/interface/interface';
import { Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/http/http.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  isSearch = 'no';

  stockArr: Stock[];

  stockMat: MatTableDataSource<Stock>;

  stockCol: ColumnObject[] = STOCK_COL_OBJ;

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.httpService.getAll(GLOBAL.APIURL.findStocks, 'dd@d.com').subscribe( data => {      
      console.log('data', data);
      this.stockArr = data;
      this.stockMat = new MatTableDataSource(this.stockArr);
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

}
