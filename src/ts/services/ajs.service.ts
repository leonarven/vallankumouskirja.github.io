
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


export const AjsInjector = new InjectionToken("AjsInjector");

export function ajsInjectorServiceFactory(i: any) {
  return i.get('$injector');
}
export const ajsInjectorServiceProvider = {
  provide: AjsInjector,
  useFactory: ajsInjectorServiceFactory,
  deps: [ '$injector' ]
};


export const AjsSce = new InjectionToken("AjsSce");

export function ajsSceServiceFactory(i: any) {
  return i.get('$sce');
}
export const ajsSceServiceProvider = {
  provide: AjsSce,
  useFactory: ajsSceServiceFactory,
  deps: ['$injector']
};


export const AjsTemplateRequest = new InjectionToken("AjsTemplateRequest");

export function ajsTemplateRequestServiceFactory(i: any) {
  return i.get('$templateRequest');
}
export const ajsTemplateRequestServiceProvider = {
  provide: AjsTemplateRequest,
  useFactory: ajsTemplateRequestServiceFactory,
  deps: ['$injector']
};