import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Sem2ios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sem2ios',
  templateUrl: 'sem2ios.html'
})
export class Sem2iosPage {
commentlist: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.commentlist = af.database.list('/comment');
  }

 addcomment(name, comment) {
    this.commentlist.push({
      name: name,
      comment: comment,
        to : "Tom Tsiliopoulos "
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
