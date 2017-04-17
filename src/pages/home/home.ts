import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Infolist: FirebaseListObservable<any>;
 constructor(public navCtrl: NavController, public navParams: NavParams,  public af: AngularFire) {

     this.Infolist = af.database.list('/information');
  }

}
