import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'my-app',
  template: '<div *ngIf="show">Hi</div>',
  directives: [NgIf]
})
export class App {
  show: boolean;
  constructor() {
    this.show = true;
    console.log('hi there');
  }
}
