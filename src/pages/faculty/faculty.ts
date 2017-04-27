import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Addfaculty} from '../addfaculty/addfaculty';
import { Sem2webPage } from '../sem2web/sem2web';
import { Sem2iosPage } from '../sem2ios/sem2ios';
import { Sem2androidPage } from '../sem2android/sem2android';

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
searchQuery: string = '';
  items: string[];

facultylist: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public af: AngularFire) {

     this.facultylist = af.database.list('/faculty');
          this.initializeItems();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Faculty');
  }

  addfaculty()
  {
     this.navCtrl.push(Addfaculty);
  }
  check(email)
  {
    if(email == "ilia@centennialcollege.ca")
    {
      this.navCtrl.push(Sem2androidPage);
    }
    else if(email == "pawluk@gmail.com")
    {
      this.navCtrl.push(Sem2webPage);
    }
     else if(email == "ttsiliop@my.centennialcollege.ca")
    {
      this.navCtrl.push(Sem2iosPage);
    }
    else
    {
      console.log("error", email);
    }
     
  }

 initializeItems() {
    this.items = [
      'Tom Tsiliopoulos',
      'Illia',
      'przemyslaw pawluk'];
  }

//fuck around here
getItems(ev: any) {
    // Reset items back to all of the items
   
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
