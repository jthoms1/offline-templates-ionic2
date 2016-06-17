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
import * as import1 from '@angular/core/src/linker/template_ref';
import * as import2 from '@angular/common/src/directives/ng_if';
import * as import4 from '@angular/core/src/linker/view';
import * as import5 from './app.component';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_utils';
import * as import9 from '@angular/core/src/linker/view_type';
import * as import10 from '@angular/core/src/change_detection/change_detection';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
var styles_App = [];
var nodeDebugInfos_App0 = [new import0.StaticNodeDebugInfo([
        import1.TemplateRef,
        import2.NgIf
    ], null, {})];
var renderType_App = null;
var _View_App0 = (function (_super) {
    __extends(_View_App0, _super);
    function _View_App0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App0, renderType_App, import9.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import10.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_App0);
    }
    _View_App0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, this.debug(0, 0, 0));
        this._appEl_0 = new import6.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import1.TemplateRef_(this._appEl_0, viewFactory_App1);
        this._NgIf_0_6 = new import2.NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this._expr_0 = import10.uninitialized;
        this.init([], [this._anchor_0], [], []);
        return null;
    };
    _View_App0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import2.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6;
        }
        return notFoundResult;
    };
    _View_App0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(0, 0, 5);
        var currVal_0 = this.context.show;
        if (import7.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_0_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_App0;
}(import4.DebugAppView));
export function viewFactory_App0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_App === null)) {
        (renderType_App = viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/tree-shake-ionic2/typescript-only-es2015-offlinetemplates-angular2/src/app/app.component.ts class App - inline template', 0, import11.ViewEncapsulation.None, styles_App));
    }
    return new _View_App0(viewUtils, parentInjector, declarationEl);
}
var nodeDebugInfos_App1 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {})
];
var _View_App1 = (function (_super) {
    __extends(_View_App1, _super);
    function _View_App1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App1, renderType_App, import9.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import10.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_App1);
    }
    _View_App1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, 'Hi', this.debug(1, 0, 18));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_App1;
}(import4.DebugAppView));
function viewFactory_App1(viewUtils, parentInjector, declarationEl) {
    return new _View_App1(viewUtils, parentInjector, declarationEl);
}
var styles_App_Host = [];
var nodeDebugInfos_App_Host0 = [new import0.StaticNodeDebugInfo([import5.App], import5.App, {})];
var renderType_App_Host = null;
var _View_App_Host0 = (function (_super) {
    __extends(_View_App_Host0, _super);
    function _View_App_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App_Host0, renderType_App_Host, import9.ViewType.HOST, viewUtils, parentInjector, declarationEl, import10.ChangeDetectionStrategy.CheckAlways, nodeDebugInfos_App_Host0);
    }
    _View_App_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import6.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_App0(this.viewUtils, this.injector(0), this._appEl_0);
        this._App_0_4 = new import5.App();
        this._appEl_0.initComponent(this._App_0_4, [], compView_0);
        compView_0.create(this._App_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_App_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.App) && (0 === requestNodeIndex))) {
            return this._App_0_4;
        }
        return notFoundResult;
    };
    return _View_App_Host0;
}(import4.DebugAppView));
function viewFactory_App_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_App_Host === null)) {
        (renderType_App_Host = viewUtils.createRenderComponentType('', 0, null, styles_App_Host));
    }
    return new _View_App_Host0(viewUtils, parentInjector, declarationEl);
}
export var AppNgFactory = new import12.ComponentFactory('my-app', viewFactory_App_Host0, import5.App);
