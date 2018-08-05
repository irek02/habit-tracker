import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";

/**
 * Generated class for the DayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'day-page',
  segment: 'day/:year/:month/:day',
  defaultHistory: ['calendar-page']
})
@Component({
  selector: 'page-day',
  templateUrl: 'day.html',
  providers: [ StorageProvider ]
})
export class DayPage {

  year: number;
  month: number;
  day: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageProvider
  ) {
    this.year = navParams.get('year');
    this.month = navParams.get('month');
    this.day = navParams.get('day');
  }

  getDayId(day: number) {

    return this.getMonthName(this.month) + '-' + day + '-' + this.year;

  }

  getMonthName(month: number) {

    const map = {
      '0': 'january',
      '1': 'february',
      '2': 'march',
      '3': 'april',
      '4': 'may',
      '5': 'june',
      '6': 'july',
      '7': 'august',
      '8': 'september',
      '9': 'october',
      '10': 'november',
      '11': 'december',
    };
    return map[month];

  }

  isSlotChecked(day: number, slot: number) {

    const slotId = this.getSlotId(day, slot);

    return this.storage.getCheckedSlots().includes(slotId);

  }

  toggleSlot(day: number, slot: number) {

    if (!this.isSlotChecked(day, slot)) {
      this.storage.addSlot(this.getSlotId(day, slot));
    } else {
      this.storage.removeSlot(this.getSlotId(day, slot));
    }

  }

  getSlotId(day: number, slot: number) {

    return this.getDayId(day) + '--' + slot;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayPage');
  }

}
