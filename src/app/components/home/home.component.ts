import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
<app-css></app-css>

 <p>Hola mundo desde app.component</p>

 <app-clases></app-clases>



<p [appResaltado] = "'red'" >Hola mundo! </p> 

<app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
