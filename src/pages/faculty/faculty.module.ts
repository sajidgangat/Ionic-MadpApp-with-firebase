import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Faculty } from './faculty';

@NgModule({
  declarations: [
    Faculty,
  ],
  
  exports: [
    Faculty
  ]
})
export class FacultyModule {}
