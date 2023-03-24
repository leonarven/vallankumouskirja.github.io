
import { InjectionToken } from '@angular/core';


export const AjsState = new InjectionToken("AjsState");

export function ajsStateServiceFactory(i: any) {
  return i.get('$state');
}
export const ajsStateServiceProvider = {
  provide: AjsState,
  useFactory: ajsStateServiceFactory,
  deps: ['$injector']
};


/*export const AjsTimeout = new InjectionToken("AjsTimeout");

export function ajsTimeoutServiceFactory(i: any) {
  return i.get('$timeout');
}
export const ajsTimeoutServiceProvider = {
  provide: AjsTimeout,
  useFactory: ajsTimeoutServiceFactory,
  deps: ['$injector']
};*/


export const AjsInjector = new InjectionToken("AjsInjector");

export function ajsInjectorServiceFactory(i: any) {
  return i.get('$injector');
}
export const ajsInjectorServiceProvider = {
  provide: AjsInjector,
  useFactory: ajsInjectorServiceFactory,
  deps: [ '$injector' ]
};

