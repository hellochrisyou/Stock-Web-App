import { Component, OnInit } from '@angular/core';
import { Stock, Ipo } from '@shared/interface/models';
import { MatTableDataSource } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { STOCK_COL_OBJ, IPO_COL_OBJ } from '@shared/const/column.const';
import { FirebaseService } from 'app/core/service/crud/firebase.service';
import { KeyValue } from '@angular/common';
import { KeyValuePair } from '@shared/interface/dto.interface';

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

  stockMatTable: MatTableDataSource<Stock>;
  ipoMatTable: MatTableDataSource<Ipo>;

  stockCol: ColumnObject[] = STOCK_COL_OBJ;
  ipoCol: ColumnObject[] = IPO_COL_OBJ;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    // this.firebaseService.getStocks()
    //   .subscribe(result => {
    //     this.stockArr = result;
    //     this.stockMatTable = new MatTableDataSource(this.stockArr);
    //   });
    // this.firebaseService.getIpos()
    //   .subscribe(result => {
    //     this.ipoArr = result;
    //     this.ipoMatTable = new MatTableDataSource(this.ipoArr);
    //   });
  }

}
