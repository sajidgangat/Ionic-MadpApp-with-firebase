import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Addfaculty} from '../addfaculty/addfaculty';
/**
 * Generated class for the Faculty page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-faculty',
  templateUrl: 'faculty.html',
})
export class Faculty {
facultylist: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public af: AngularFire) {

     this.facultylist = af.database.list('/faculty');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Faculty');
  }

  addfaculty()
  {
     this.navCtrl.push(Addfaculty);
  }

}
