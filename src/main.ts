import { bootstrapApplication } from '@angular/platform-browser';
import { MyGraphComponent } from './app/my-graph.component';
import { createCustomElement } from '@angular/elements';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrapApplication(MyGraphComponent).then((appRef) => {
  const MyGraphElement = createCustomElement(MyGraphComponent, {
    injector: appRef.injector,
  });

  customElements.define('my-graph', MyGraphElement);
});
