import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './core/service/guard/auth.guard';
import { HomeComponent } from '@home/home.component';
import { ProfileComponent } from '@home/profile/profile.component';
import { SearchLogicComponent } from '@home/search/logic/search-logic.component';
import { MyListComponent } from '@home/my-list/my-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'search-stock',
    component: SearchLogicComponent
  },
  {
    path: 'my-list',
    component: MyListComponent
  },
  {
    path: '',
    redirectTo: '/home',
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
