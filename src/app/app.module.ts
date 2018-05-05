import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyHomePage } from "../pages/my-home/my-home";
import {MoviesListPage} from "../pages/movies-list/movies-list";
import {MoviesDetailsPage} from "../pages/movies-details/movies-details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyHomePage,
    MoviesListPage,
    MoviesDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyHomePage,
    MoviesListPage,
    MoviesDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
