import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SearchLogicComponent } from './search/logic/search-logic.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'search-stock',
    component: SearchLogicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
