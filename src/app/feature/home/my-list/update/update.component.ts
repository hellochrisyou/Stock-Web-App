import { Component, OnInit } from '@angular/core';
import { Stock, Ipo } from '@shared/interface/models';
import { MatSnackBar } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { STOCK_COL_OBJ, IPO_COL_OBJ } from '@shared/const/column.const';
import { StateStockAddService } from 'app/core/service/state-management/state-stock-add.service';
import { StateIpoAddService } from 'app/core/service/state-management/state-ipo-add.service';
import { Observable } from 'rxjs';
import { StateIpoRemoveService } from 'app/core/service/state-management/state-ipo-remove.service';
import { StateStockRemoveService } from 'app/core/service/state-management/state-stock-remove.service';

@Component({
  selector: 'update-my-list',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  isSearch = 'no';

  pendAddStockArr: Stock[] = [];
  pendRmStockArr: Stock[] = [];
  pendAddIpoArr: Ipo[] = [];
  pendRmIpoArr: Ipo[] = [];

  pendAddStockTable: Observable<Stock[]>;
  pendRmStockTable: Observable<Stock[]>;
  pendAddIpoTable: Observable<Ipo[]>;
  pendRmIpoTable: Observable<Ipo[]>;

  stockCol: ColumnObject[] = STOCK_COL_OBJ;
  ipoCol: ColumnObject[] = IPO_COL_OBJ;

  constructor(
    private stateIpoAddService: StateIpoAddService,
    private stateIpoRemoveService: StateIpoRemoveService,
    private stateStockAddService: StateStockAddService,
    private stateStockRemoveService: StateStockRemoveService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.pendAddStockTable = this.stateIpoAddService.addIpos$;
    this.pendRmStockTable = this.stateIpoRemoveService.rmIpos$;
    this.pendAddIpoTable = this.stateStockAddService.addStocks$;
    this.pendRmIpoTable = this.stateStockRemoveService.rmStocks$;
  }

  public update(): void {
    this.snackBar.open('Updated', 'SUCCESS', {
    });
  }
}
