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

    it('should show 31 days', () => {

      el = fixture.nativeElement.querySelectorAll('.day');

      expect(el.length).toBe(31);

    });

    it('should show the date of a day', () => {

      // el = fixture.nativeElement.querySelectorAll('.day .date');
      el = fixture.nativeElement.querySelector('#july-15-2018 .date');

      console.log(fixture.nativeElement);

      expect(el.textContent).toBe('15');

      // July 1st.
      // expect(el[0].textContent).toBe('1');

      // // July 16st.
      // expect(el[15].textContent).toBe('16');

      // // July 31st.
      // expect(el[30].textContent).toBe('31');

    });

    // it('should show 5 slots in the day', () => {

    //   el = fixture.nativeElement.querySelectorAll('.day')[0];

    //   console.log(fixture.nativeElement.querySelectorAll('.day')[0]);

    //   // // July 1st.
    //   // expect(el[0].textContent).toContain(1);

    //   // // July 16st.
    //   // expect(el[15].textContent).toContain(16);

    //   // // July 31st.
    //   // expect(el[30].textContent).toContain(31);

    // });

  });



});
