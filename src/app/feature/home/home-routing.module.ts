import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home.component';
import { LoginLogicComponent } from '@home/login/login.component';
import { SignupLogicComponent } from '@home/signup/signup.component';
import { MyListComponent } from '@home/my-list/my-list.component';
import { SearchLogicComponent } from '@home/search/logic/search-logic.component';
import { ProfileComponent } from '@home/profile/profile.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginLogicComponent
  },
  {
    path: 'signup',
    component: SignupLogicComponent
  },
  {
    path: 'search-stock',
    component: SearchLogicComponent
  },
  {
    path: 'portfolio',
    component: ProfileComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
