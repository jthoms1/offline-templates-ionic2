import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
export var App = (function () {
    function App() {
        this.show = true;
        console.log('hi there');
    }
    /** @nocollapse */
    App.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: '<div *ngIf="show">Hi</div>',
                    directives: [NgIf]
                },] },
    ];
    /** @nocollapse */
    App.ctorParameters = [];
    return App;
}());
