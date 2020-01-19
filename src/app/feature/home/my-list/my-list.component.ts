import { Component, OnInit } from '@angular/core';
import { Stock, Ipo } from '@shared/interface/models';
import { MatTableDataSource } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { STOCK_COL_OBJ } from '@shared/const/column.const';
import { FirebaseService } from 'app/core/service/crud/firebase.service';
import { KeyValue } from '@angular/common';
import { KeyValuePair } from '@shared/interface/dto.interface';
import { HttpService } from 'app/core/service/http/http.service';
import * as GLOBAL from '@shared/const/url.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  isSearch = 'no';

  stockArr: Stock[] = [];
  ipoArr: Ipo[] = [];

  stockMat: MatTableDataSource<Stock>;

  stockCol: ColumnObject[] = STOCK_COL_OBJ;

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.httpService.getAll(GLOBAL.APIURL.addStock, 'dd@d.com').subscribe( data => {      
      this.stockArr = data.data;
      this.stockMat = new MatTableDataSource(this.stockArr);
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

}
