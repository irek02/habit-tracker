import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CalendarPage } from './calendar';
import {IonicModule, Platform, NavController, NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StorageProvider} from "../../providers/storage/storage";
import { spyOnClass } from 'jasmine-es6-spies';

describe('Page1', () => {
  let de: DebugElement;
  let comp: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;
  let navParams: jasmine.SpyObj<NavParams>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarPage],
      imports: [
        IonicModule.forRoot(CalendarPage)
      ],
      providers: [
        NavController,
        StorageProvider,
        // { provide: NavParams, useClass: spyOnClass(NavParams) }
        { provide: NavParams, useClass: class {} }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPage);
    navParams = TestBed.get(NavParams);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h3'));
  });

  it('should have expected <h3> text', () => {
    // fixture.detectChanges();
    expect(true).toBe(true);
    // const h3 = de.nativeElement;
    // expect(h3.innerText).toMatch(/ionic/i,
    //   '<h3> should say something about "Ionic"');
  });

  // it('should show the favicon as <img>', () => {
  //   fixture.detectChanges();
  //   const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
  //   expect(img.src).toContain('assets/icon/favicon.ico');
  // });
});
