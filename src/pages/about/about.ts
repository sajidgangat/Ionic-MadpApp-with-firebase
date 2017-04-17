import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sem1Page } from '../sem1/sem1';
import { Sem2Page } from '../sem2/sem2';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

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
