import { Component, OnInit } from '@angular/core';
import { Stock, Ipo } from '@shared/interface/models';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { STOCK_COL_OBJ, IPO_COL_OBJ } from '@shared/const/column.const';
import { StateStockService } from 'app/core/service/state-management/state-stock.service';
import { StateIpoService } from 'app/core/service/state-management/state-ipo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  stockArr: Stock[] = [];
  ipoArr: Ipo[] = []

  stockUpdateMatTable: Observable<Stock[]>;
  ipoUpdateMatTable: Observable<Ipo[]>;

  stockCol: ColumnObject[] = STOCK_COL_OBJ;
  ipoCol: ColumnObject[] = IPO_COL_OBJ;

  constructor(
    private stateStockService: StateStockService,
    private stateIpoService: StateIpoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.ipoUpdateMatTable = this.stateIpoService.ipos$;
    this.stockUpdateMatTable = this.stateStockService.stocks$;
  }

  public update(): void {
    this.snackBar.open('Sign Up', 'SUCCESS', {
    });
  }
}
