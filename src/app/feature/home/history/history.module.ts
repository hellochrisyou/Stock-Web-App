import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [HistoryComponent, SearchHistoryComponent, StockHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
