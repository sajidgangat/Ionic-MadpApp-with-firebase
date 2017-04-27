import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Comment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
commentlist1: FirebaseListObservable<any>;
 constructor(public navCtrl: NavController, public navParams: NavParams,  public af: AngularFire) {

     this.commentlist1 = af.database.list('/comment');
        
  }

 

}
