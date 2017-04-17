import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Addfaculty } from './addfaculty';

@NgModule({
  declarations: [
    Addfaculty,
  ],
 
  exports: [
    Addfaculty
  ]
})
export class AddfacultyModule {}
