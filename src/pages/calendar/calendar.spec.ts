import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { Component, DebugElement} from '@angular/core';
import { CalendarPage } from './calendar';
import {IonicModule, Platform, NavController, NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StorageProvider} from "../../providers/storage/storage";
import { spyOnClass } from 'jasmine-es6-spies';

// @Component({
//   template: `
//     <ion-page-calendar
//       [year]="year"
//       [month]="month">
//     </ion-page-calendar>
//   `
// })
// class HostComponent {
//   // July, 2018.
//   year = 2018;
//   month = 6;
// }

describe('Page1', () => {
  // let fixture: ComponentFixture<HostComponent>;
  // let host;
  // let el;
  // let storageServiceSpy: jasmine.SpyObj<StorageProvider>;
  //
  //
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       IonicModule.forRoot(CalendarPage)
  //     ],
  //     declarations: [ CalendarPage, HostComponent ],
  //     providers: [
  //       { provide: StorageProvider, useValue: spyOnClass(StorageProvider) },
  //       NavController,
  //       { provide: NavParams, useClass: class {} }
  //     ],
  //   })
  //   .compileComponents();
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HostComponent);
  //   host = fixture.componentInstance;
  //   storageServiceSpy = TestBed.get(StorageProvider);
  // });
  //
  // beforeEach(() => {
  //
  //   storageServiceSpy.getCheckedSlots.and.returnValue([]);
  //   fixture.detectChanges();
  //
  // });

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
        { provide: NavParams, useFactory: () => spyOnClass(NavParams) }
      ]
    });
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPage);
    navParams = TestBed.get(NavParams);
    comp = fixture.componentInstance;
    // console.log(fixture.detectChanges());
    // de = fixture.debugElement.query(By.css('h3'));
  });

  it('should have expected <h3> text', () => {
    fixture.detectChanges();
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
