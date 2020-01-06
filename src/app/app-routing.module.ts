import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule),
    // canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/feature',
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
