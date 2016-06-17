import { Component } from '@angular/core';
import { Page } from './page.component';
import { App } from 'ionic-angular';
import { Nav } from 'ionic-angular';
export var MyApp = (function () {
    function MyApp(app) {
        this.root = Page;
        console.log(Nav);
        debugger;
    }
    /** @nocollapse */
    MyApp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-app',
                    template: "<ion-nav [root]=\"root\"></ion-nav>",
                    directives: [Nav]
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: App, },
    ];
    return MyApp;
}());
