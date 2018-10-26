import { Component } from '@angular/core';

@Component({
  selector: 'app-danger',
  templateUrl: './danger.component.html',
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class DangerComponent {}

export default DangerComponent;
