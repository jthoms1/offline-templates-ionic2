import { ReflectiveInjector, coreBootstrap } from '@angular/core';
import { BROWSER_APP_PROVIDERS, browserPlatform } from '@angular/platform-browser';
import { AppNgFactory } from './app/app.component.ngfactory';
var appInjector = ReflectiveInjector.resolveAndCreate(BROWSER_APP_PROVIDERS, browserPlatform().injector);
coreBootstrap(AppNgFactory, appInjector);
