import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { Component, DebugElement} from '@angular/core';
import { CalendarPage } from './calendar';
import {IonicModule, Platform, NavController, NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StorageProvider} from "../../providers/storage/storage";
import { spyOnClass } from 'jasmine-es6-spies';

describe('Page1', () => {

  let comp: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;
  let navParams: jasmine.SpyObj<NavParams>;

  function els() {
    return {
      weekdayNames: fixture.nativeElement.querySelectorAll('.weekday-name')
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarPage],
      imports: [
        IonicModule.forRoot(CalendarPage)
      ],
      providers: [
        NavController,
        { provide: StorageProvider, useFactory: () => spyOnClass(StorageProvider) },
        { provide: NavParams, useFactory: () => spyOnClass(NavParams) }
      ]
    });
  }));


  beforeEach(() => {

    fixture = TestBed.createComponent(CalendarPage);
    navParams = TestBed.get(NavParams);
    comp = fixture.componentInstance;

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

});
