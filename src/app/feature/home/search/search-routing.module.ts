import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLogicComponent } from './logic/search-logic.component';


const routes: Routes = [
  {
    path: '',
    component: SearchLogicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
