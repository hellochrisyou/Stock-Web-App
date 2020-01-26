import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryLogicComponent } from './logic/history-logic/history-logic.component';
import { SearchHistoryComponent } from './presentation/search-presentation/search-history.component';
import { StockHistoryComponent } from './presentation/stock-presentation/stock-history.component';


@NgModule({
  declarations: [HistoryLogicComponent, SearchHistoryComponent, StockHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
