import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

@Component({
  template: `
    <app-calendar [year]="year" [month]="month"></app-calendar>`
})
class HostComponent {

  // July, 2018.
  year = 2018;
  month = 6;

}

fdescribe('CalendarComponent', () => {
  // let component: CalendarComponent;
  let fixture: ComponentFixture<HostComponent>;
  let host;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent, HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    // el = fixture.nativeElement.querySelector('.hero');
    fixture.detectChanges();
  });

  describe('July, 2018', () => {

    it('should show calendar', () => {

      el = fixture.nativeElement.querySelector('.calendar');
      // console.log(fixture.nativeElement);
      expect(el).toBeTruthy();

    });

    it('should show 31 dates', () => {

      el = fixture.nativeElement.querySelectorAll('.date');
      // console.log(fixture.nativeElement);
      expect(el.length).toBe(31);

    });

  });



});
