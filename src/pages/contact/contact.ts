import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController) {
      this.initializeItems();

  }
  initializeItems() {
    this.items = [
      'ILLIA',
      'TOM','VICTOR','PAWLUK','CHARLES','JIM','JONES'];
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

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
