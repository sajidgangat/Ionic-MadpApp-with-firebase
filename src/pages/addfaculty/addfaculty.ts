import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/**
 * Generated class for the Addfaculty page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addfaculty',
  templateUrl: 'addfaculty.html',
})
export class Addfaculty {

   facultylist: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.facultylist = af.database.list('/faculty');
  }

  addfaculty(name, address, phone, city) {
    this.facultylist.push({
      name: name,
      address: address,
      phone: phone,
      city: city
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
