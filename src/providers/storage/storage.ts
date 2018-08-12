import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor() {
  }

  getCheckedSlots(): Array<string> {

    const result = localStorage.getItem('habit-tracker-calendar');

    return result ? JSON.parse(result) : [];

  }

  addSlot(id: string) {

    const checkedSlots = this.getCheckedSlots();

    if (!checkedSlots.includes(id)) {

      checkedSlots.push(id);

      localStorage.setItem('habit-tracker-calendar', JSON.stringify(checkedSlots));

    }

  }

  removeSlot(id: string) {

    const checkedSlots = this.getCheckedSlots();

    if (checkedSlots.includes(id)) {

      checkedSlots.splice(checkedSlots.indexOf(id), 1);

      localStorage.setItem('habit-tracker-calendar', JSON.stringify(checkedSlots));

    }

  }

  getLabelsForMonth(id: string): Object {

    return { foo: 'hello' };

  }

  saveLabelForMonth(month: string, name: string, value: string) {

    console.log(month, name, value);

  }

}
