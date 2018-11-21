import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {


  recorrido = 0;
  alertas: string [] =
  [
    'success',
    'info',
    'warning'
    ];
  alerta:string;
  constructor() { }

  ngOnInit() {
  }

  cambiarDeAlerta() {

   if (this.recorrido < this.alertas.length) {
     this.recorrido++;
    } else {
     this.recorrido = 0;
   }
   this.alerta = this.alertas[this.recorrido ];

  }


}
