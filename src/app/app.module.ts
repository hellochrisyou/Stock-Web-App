import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MyListComponent } from '@feature/my-list/my-list.component';
import { SearchModule } from '@feature/search/search.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MyListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    SearchModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
