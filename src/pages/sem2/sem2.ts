import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sem1Page } from '../sem1/sem1';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Sem2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sem2',
  templateUrl: 'sem2.html'
})
export class Sem2Page {
sem2list: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.sem2list = af.database.list('/sem2');
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
