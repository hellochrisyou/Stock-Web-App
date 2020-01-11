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
