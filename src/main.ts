import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MyGraphComponent } from './app/my-graph.component';
import { createCustomElement } from '@angular/elements';

bootstrapApplication(MyGraphComponent).then((appRef) => {
  const MyGraphElement = createCustomElement(MyGraphComponent, {
    injector: appRef.injector,
  });

  customElements.define('my-graph', MyGraphElement);
});
