import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { CalendarPage } from './calendar';
import {StorageProvider} from "../../providers/storage/storage";

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
  ],
  providers: [
    StorageProvider
  ]
})
export class CalendarPageModule {}
