import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SmartSearchComponent } from './search/smart/smart-search.component';
import { MyListComponent } from './my-list/my-list.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Profile',
    component: ProfileComponent
  },
  {
    path: 'search-stock',
    component: SmartSearchComponent
  },
  {
    path: 'my-list',
    component: MyListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
