import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MyListComponent } from '@feature/my-list/my-list.component';
import { SmartSearchComponent } from '@feature/search/smart/smart-search.component';


const routes: Routes = [
  {
    path: 'search-stock',
    component: SmartSearchComponent
  },
  {
    path: 'my-list',
    component: MyListComponent
  },
  {
    path: '',
    redirectTo: '/search-stock',
    pathMatch: 'full'

  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
