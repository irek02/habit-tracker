import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { StorageService } from '../storage.service';

@Component({
  template: `
    <app-calendar
      [year]="year"
      [month]="month">
     </app-calendar>`
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
  let storageServiceSpy: jasmine.SpyObj<StorageService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: StorageService, useValue: jasmine.createSpyObj('StorageService', ['getCheckedSlots']) }
      ],
      declarations: [ CalendarComponent, HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    storageServiceSpy = TestBed.get(StorageService);
  });

  beforeEach(() => {

    storageServiceSpy.getCheckedSlots.and.returnValue([]);
    fixture.detectChanges();

  });

  describe('July, 2018', () => {

    it('should show calendar', () => {

      el = fixture.nativeElement.querySelector('.calendar');

      expect(el).toBeTruthy();

    });

    it('should show 31 days', () => {

      el = fixture.nativeElement.querySelectorAll('.day');

      expect(el.length).toBe(31);

    });

    it('should show the date of a day', () => {

      el = fixture.nativeElement.querySelector('#july-15-2018 .date');

      expect(el.textContent).toBe('15');

    });

    it('should show 5 habit slots in the day', () => {

      el = fixture.nativeElement.querySelectorAll('#july-15-2018 .slot');

      expect(el.length).toBe(5);

    });

    it('should show checked habit slots in the day', () => {

      storageServiceSpy.getCheckedSlots.and.returnValue(['july-15-2018--1', 'july-15-2018--4']);

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#july-15-2018 .slot.slot-1.checked')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#july-15-2018 .slot.slot-2.checked')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('#july-15-2018 .slot.slot-3.checked')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('#july-15-2018 .slot.slot-4.checked')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#july-15-2018 .slot.slot-5.checked')).toBeFalsy();

    });

    it('should open the day view when clicked on the day', () => {

      expect(fixture.nativeElement.querySelector('.open-day')).toBeFalsy();

      fixture.nativeElement.querySelector('#july-15-2018').click();

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.open-day')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.calendar')).toBeFalsy();

    });

    it('should close the day view when clicked on the close button', () => {

      expect(fixture.nativeElement.querySelector('.open-day')).toBeFalsy();

      fixture.nativeElement.querySelector('#july-15-2018').click();

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.open-day')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.calendar')).toBeFalsy();

      fixture.nativeElement.querySelector('.open-day .close').click();

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.open-day')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('.calendar')).toBeTruthy();

    });

  });

});
