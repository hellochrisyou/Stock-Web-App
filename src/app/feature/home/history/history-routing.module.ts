import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/core/service/guard/auth.guard';

import { HistoryComponent } from './history.component';


const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,  canActivate: [AuthGuard] , data: {state: 'history' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
