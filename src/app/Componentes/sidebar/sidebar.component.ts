import { Component,Renderer2, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder, private renderer: Renderer2, private el:ElementRef, private route: Router) {}

  
  navegador(ruta:string){
    this.route.navigate([ruta]);
  }



  mostrarComponente: boolean = false;

  toggleComponente() {
    this.mostrarComponente = !this.mostrarComponente;
  }

}
