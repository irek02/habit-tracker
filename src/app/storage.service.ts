import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getCheckedSlots(): Array<string> {

    const result = localStorage.getItem('habit-tracker-calendar');

    return result ? JSON.parse(result) : [];

  }

}
