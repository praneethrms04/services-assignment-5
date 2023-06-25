import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeCounter = 0;
  inActiveCounter = 0;

  activeToInactive() {
    this.activeCounter++;
    console.log(`active to inactive ${this.activeCounter}`);
  }

  inActiveToactive() {
    this.inActiveCounter++;
    console.log(`Inactive to active ${this.inActiveCounter}`);
  }

  constructor() {}
}
