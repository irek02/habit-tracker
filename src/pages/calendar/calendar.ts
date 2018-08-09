import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as calendar from 'calendar';
import {StorageProvider} from "../../providers/storage/storage";

@IonicPage({
  name: 'calendar-page',
  segment: 'calendar/:year/:month'
})
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  providers: [ StorageProvider ]
})
export class CalendarPage implements OnInit {

  year: number;
  month: number;
  calendar: object;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageProvider
  ) {

  }

  getDayId(day: number) {

    return this.getMonthName(this.month) + '-' + day + '-' + this.year;

  }

  goToPreviousMonth() {
    this.navCtrl.push('calendar-page', {
      year: this.year,
      month: this.month - 1
    });
  }

  goToDay(day: number) {
    this.navCtrl.push('day-page', {
      year: this.year,
      month: this.month,
      day: day
    });
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

  getSlotId(day: number, slot: number) {

    return this.getDayId(day) + '--' + slot;

  }

  ngOnInit() {
    this.year = parseInt(this.navParams.get('year'));
    this.month = parseInt(this.navParams.get('month'));
    this.calendar = new calendar.Calendar(0).monthDays(this.year, this.month);
  }

  ionViewDidLoad() {

  }

}
