import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MyListComponent } from './my-list/my-list.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    MyListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // FeatureRoutingModule
  ],
  exports: [
    MyListComponent,
    SearchComponent
  ]
})
export class FeatureModule { }
