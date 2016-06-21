import { Component } from '@angular/core';
import { App } from 'ionic-angular';
export var Page = (function () {
    function Page(app) {
    }
    /** @nocollapse */
    Page.decorators = [
        { type: Component, args: [{
                    selector: 'ion-page',
                    template: "\n  Sup Yo\n  "
                },] },
    ];
    /** @nocollapse */
    Page.ctorParameters = [
        { type: App, },
    ];
    return Page;
}());
