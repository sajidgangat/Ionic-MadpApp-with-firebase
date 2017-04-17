import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { Sem1Page } from '../pages/sem1/sem1';
import { Sem2Page } from '../pages/sem2/sem2';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Faculty } from '../pages/faculty/faculty';
import { Addfaculty } from '../pages/addfaculty/addfaculty';
import { Sem1androidPage } from '../pages/sem1android/sem1android';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
     Faculty,
    Addfaculty,
    Sem1Page,
    Sem2Page,
    Sem1androidPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Faculty,
    Addfaculty,
    Sem1Page,
    Sem2Page,
    Sem1androidPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    FIREBASE_PROVIDERS,

    defaultFirebase({

      apiKey: "AIzaSyAZoGKKZlIW_znRo0BPOjPB3DYAPBgBjY0",

      authDomain: "jokes-73c1d.firebaseapp.com",

      databaseURL: "https://jokes-73c1d.firebaseio.com",

      storageBucket: "jokes-73c1d.appspot.com",

    })
  ]
})
export class AppModule {}
