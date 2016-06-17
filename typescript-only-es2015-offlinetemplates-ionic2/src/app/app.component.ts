import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Page} from './page.component';
import {App} from 'ionic-angular';
import {NgIf} from '@angular/common';
import {Nav} from 'ionic-angular';

@Component({
  selector: 'ion-app',
  template: `<ion-nav [root]="root"></ion-nav>`,
  directives: [Nav]
})
export class MyApp {
  root = Page;
  constructor(app: App) {
    console.log(Nav);
    debugger;
  }
}

