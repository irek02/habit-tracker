import { Component, OnInit, Inject } from '@angular/core';
import * as calendar from 'calendar';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {

    console.log(calendar);

    const cmon = new calendar.Calendar(0);

    console.log(new calendar.Calendar(0).monthDays(2018, 6));

    // calendar();

    // calendar.new(this.document.getElementById('my-calendar'));

  }

}
