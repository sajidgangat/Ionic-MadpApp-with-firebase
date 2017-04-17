import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sem2Page } from '../sem2/sem2';
import { Sem1androidPage } from '../sem1android/sem1android';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Sem1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sem1',
  templateUrl: 'sem1.html'
})
export class Sem1Page {
sem1list: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.sem1list = af.database.list('/sem1');
  }
 android()
  {
     this.navCtrl.push(Sem1androidPage);
  }
  sem1()
  {
     this.navCtrl.push(Sem1Page);
  }
  sem2()
  {
     this.navCtrl.push(Sem2Page);
  }
}
