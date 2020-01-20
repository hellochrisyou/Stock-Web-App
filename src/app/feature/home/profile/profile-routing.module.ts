import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from 'app/core/service/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,  canActivate: [AuthGuard] , data: {state: 'profile' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
