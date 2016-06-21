import { Component } from '@angular/core';
import { Page } from './page.component';
import { App } from 'ionic-angular';
import { Content } from 'ionic-angular';
export var MyApp = (function () {
    function MyApp(app) {
        this.root = Page;
        //console.log(Nav);
        debugger;
    }
    /** @nocollapse */
    MyApp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-app',
                    template: "\n<ion-content padding>\n  <p>\n\t<button light>Light</button>\n  </p>\n\n  <p>\n\t<button>Default</button>\n  </p>\n\n  <p>\n\t<button secondary>Secondary</button>\n  </p>\n\n  <p>\n\t<button danger>Danger</button>\n  </p>\n\n  <p>\n\t<button dark>Dark</button>\n  </p>\n</ion-content>\n  ",
                    directives: [Content]
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: App, },
    ];
    return MyApp;
}());
