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
import { Sem1webPage } from '../pages/sem1web/sem1web';
import { Addfaculty } from '../pages/addfaculty/addfaculty';
import { Sem1uiPage } from '../pages/sem1ui/sem1ui';
import { Sem2webPage } from '../pages/sem2web/sem2web';
import { Sem2iosPage } from '../pages/sem2ios/sem2ios';
import { Sem2androidPage } from '../pages/sem2android/sem2android';
import { Sem1nodejsPage } from '../pages/sem1nodejs/sem1nodejs';
import { CommentPage } from '../pages/comment/comment';
import { Sem1iosPage } from '../pages/sem1ios/sem1ios';
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
    Sem1androidPage,
    Sem1webPage,
    Sem1uiPage,
    Sem1nodejsPage,
    Sem1iosPage,
    Sem2webPage,
    Sem2iosPage,
    Sem2androidPage,
    CommentPage
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
    Sem1androidPage,
    Sem1webPage,
    Sem1uiPage,
    Sem1nodejsPage,
    Sem1iosPage,
    Sem2webPage,
    Sem2iosPage,
    Sem2androidPage,
    CommentPage
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
