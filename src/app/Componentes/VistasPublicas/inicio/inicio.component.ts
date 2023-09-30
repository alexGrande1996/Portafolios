import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  info = ["Alejandro","Lozano","Orduña"];
  contador = 0;



  sumas(){
    this.info[0] = (this.contador++).toString();
  }


  
}
