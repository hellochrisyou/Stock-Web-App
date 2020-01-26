import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '@home/home/logic/home-logic.component';
import { LoginLogicComponent } from '@home/home/presentation/login-presentation/login-presentation.component';
import { MyListModule } from '@home/my-list/my-list.module';
import { ProfileModule } from '@home/profile/profile.module';
import { SearchModule } from '@home/search/search.module';
import { SignupLogicComponent } from '@home/home/presentation/signup-presentation/signup-presentation.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorComponent } from './error/error.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from '@home/home/home.module';
import { HistoryLogicComponent } from './feature/home/history/logic/history-logic/history-logic.component';
import { HistoryModule } from '@home/history/history.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    SharedModule,
    HistoryModule,
    SearchModule,
    MyListModule,
    ProfileModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
