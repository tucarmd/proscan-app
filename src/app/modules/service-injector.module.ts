import { NgModule, Injector } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export let ServiceInjector: Injector;

@NgModule()
export class ServiceInjectorModule {
  constructor(private injector: Injector) {
    ServiceInjector = this.injector;
  }
}
