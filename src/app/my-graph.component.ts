import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'my-graph',
  template: `
    <h2>My graph</h2>
    <p>Graph Data: {{ graphData }}</p>
  `,
})
export class MyGraphComponent {
  @Input() graphData: string = '';
}
