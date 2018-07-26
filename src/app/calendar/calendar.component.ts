import { Component, OnInit, Input } from '@angular/core';
import * as calendar from 'calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() year: any;
  @Input() month: any;

  calendar: string;

  constructor() { }

  ngOnInit() {
    // console.log(new calendar.Calendar(0).monthDays(2018, 6));
    this.calendar = new calendar.Calendar(0).monthDays(this.year, this.month);

  }

}
