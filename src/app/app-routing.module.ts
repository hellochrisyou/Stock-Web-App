import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './core/service/guard/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'search-stock',
    loadChildren: () => import('./feature/search/search.module').then(mod => mod.SearchModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-list',
    loadChildren: () => import('./feature/my-list/my-list.module').then(mod => mod.MyListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./feature/profile/profile.module').then(mod => mod.ProfileModule),
    canActivate: [AuthGuard]
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
