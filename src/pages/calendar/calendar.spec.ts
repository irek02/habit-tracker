import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { Component, DebugElement} from '@angular/core';
import { CalendarPage } from './calendar';
import {IonicModule, Platform, NavParams, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StorageProvider} from "../../providers/storage/storage";
import { spyOnClass } from 'jasmine-es6-spies';
import {CalendarPageModule} from "./calendar.module";
import * as moment from 'moment';

describe('Page1', () => {

  let comp: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;
  let navCtrl: jasmine.SpyObj<NavController>;
  let navParams: jasmine.SpyObj<NavParams>;
  let storage: jasmine.SpyObj<StorageProvider>;

  let yearMock;
  let monthMock;

  function els() {
    return {
      weekdayNames: fixture.nativeElement.querySelectorAll('.weekday-name'),
      previousBtn: fixture.debugElement.query(By.css('.previousBtn')),
      nextBtn: fixture.debugElement.query(By.css('.nextBtn'))
    }
  }

  class NavCtrlMock {
    push () {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(CalendarPage)
      ],
      declarations: [
        CalendarPage
      ],
      providers: [
        { provide: NavController, useClass: NavCtrlMock },
        { provide: StorageProvider, useFactory: () => spyOnClass(StorageProvider) },
        { provide: NavParams, useFactory: () => spyOnClass(NavParams) }
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {

    fixture = TestBed.createComponent(CalendarPage);
    navCtrl = TestBed.get(NavController);
    navParams = TestBed.get(NavParams);
    storage = TestBed.get(StorageProvider);
    comp = fixture.componentInstance;

  });

  beforeEach(() => {

    monthMock = 7; // August.
    yearMock = 2018;

    navParams.get.and.callFake(function (param) {

      if (param === 'month') {
        return monthMock;
      }
      if (param === 'year') {
        return yearMock;
      }

    });

  });


  it('should show weekday names', () => {

    fixture.detectChanges();

    expect(els().weekdayNames[0].innerHTML).toContain('Sun');
    expect(els().weekdayNames[1].innerHTML).toContain('Mon');
    expect(els().weekdayNames[2].innerHTML).toContain('Tue');
    expect(els().weekdayNames[3].innerHTML).toContain('Wed');
    expect(els().weekdayNames[4].innerHTML).toContain('Thu');
    expect(els().weekdayNames[5].innerHTML).toContain('Fri');
    expect(els().weekdayNames[6].innerHTML).toContain('Sat');

  });

  it('should navigate to the previous month', () => {

    spyOn(navCtrl, 'push');

    fixture.detectChanges();

    els().previousBtn.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith('calendar-page', {
      year: 2018,
      month: 6
    });

  });

  it('should navigate to the previous year', () => {

    monthMock = 0; // January.
    yearMock = 2018;

    spyOn(navCtrl, 'push');

    fixture.detectChanges();

    els().previousBtn.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith('calendar-page', {
      year: 2017,
      month: 11 // December.
    });

  });

  it('should navigate to the next month', () => {

    monthMock = 4; // May.
    yearMock = 2018;

    spyOn(navCtrl, 'push');

    fixture.detectChanges();

    els().nextBtn.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith('calendar-page', {
      year: 2018,
      month: 5
    });

  });

  it('should not show the next button when displaying the current month', () => {

    monthMock = moment().month(); // Current month.

    expect(els().nextBtn).toBeFalsy();

  });

  it('should navigate to the next year', () => {

    monthMock = 11; // December.
    yearMock = 2017;

    spyOn(navCtrl, 'push');

    fixture.detectChanges();

    els().nextBtn.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith('calendar-page', {
      year: 2018,
      month: 0 // January.
    });

  });

});

