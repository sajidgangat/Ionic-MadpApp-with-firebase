import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Sem1ios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sem1ios',
  templateUrl: 'sem1ios.html'
})
export class Sem1iosPage {
 androidlist: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.androidlist = af.database.list('/c4');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sem1iosPage');
  }

}
