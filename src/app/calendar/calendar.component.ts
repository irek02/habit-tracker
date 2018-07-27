import { Component, OnInit, Input } from '@angular/core';
import * as calendar from 'calendar';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() year: any;
  @Input() month: any;

  calendar: string;

  openDay: number;

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {

    this.calendar = new calendar.Calendar(0).monthDays(this.year, this.month);

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

    const slotId = this.getDayId(day) + '--' + slot;

    return this.storage.getCheckedSlots().includes(slotId);

  }

}
