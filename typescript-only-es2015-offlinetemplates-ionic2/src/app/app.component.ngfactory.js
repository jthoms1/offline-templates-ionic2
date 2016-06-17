/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/debug_context';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from 'ionic-angular/components/app/app';
import * as import11 from '@angular/core/src/linker/component_factory';
var styles_MyApp = [];
var nodeDebugInfos_MyApp0 = [new import0.StaticNodeDebugInfo([], null, {})];
var renderType_MyApp = null;
var _View_MyApp0 = (function (_super) {
    __extends(_View_MyApp0, _super);
    function _View_MyApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp0, renderType_MyApp, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_MyApp0);
    }
    _View_MyApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', this.debug(0, 0, 0));
        this._expr_0 = import8.uninitialized;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_MyApp0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.debug(0, 0, 9);
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'root', currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MyApp0;
}(import2.DebugAppView));
export function viewFactory_MyApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp === null)) {
        (renderType_MyApp = viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/tree-shake-ionic2/typescript-only-es2015-offlinetemplates-ionic2/src/app/app.component.ts class MyApp - inline template', 0, import9.ViewEncapsulation.None, styles_MyApp));
    }
    return new _View_MyApp0(viewUtils, parentInjector, declarationEl);
}
var styles_MyApp_Host = [];
var nodeDebugInfos_MyApp_Host0 = [new import0.StaticNodeDebugInfo([import3.MyApp], import3.MyApp, {})];
var renderType_MyApp_Host = null;
var _View_MyApp_Host0 = (function (_super) {
    __extends(_View_MyApp_Host0, _super);
    function _View_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp_Host0, renderType_MyApp_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_MyApp_Host0);
    }
    _View_MyApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ion-app', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import6.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyApp_0_4 = new import3.MyApp(this.parentInjector.get(import10.App));
        this._appEl_0.initComponent(this._MyApp_0_4, [], compView_0);
        compView_0.create(this._MyApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MyApp) && (0 === requestNodeIndex))) {
            return this._MyApp_0_4;
        }
        return notFoundResult;
    };
    return _View_MyApp_Host0;
}(import2.DebugAppView));
function viewFactory_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp_Host === null)) {
        (renderType_MyApp_Host = viewUtils.createRenderComponentType('', 0, null, styles_MyApp_Host));
    }
    return new _View_MyApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyAppNgFactory = new import11.ComponentFactory('ion-app', viewFactory_MyApp_Host0, import3.MyApp);