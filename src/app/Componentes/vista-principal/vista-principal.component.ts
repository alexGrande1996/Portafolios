import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.scss']
})


export class VistaPrincipalComponent {

  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  panelOpenState = false;

  constructor(
    private _formBuilder: FormBuilder,
    private renderer: Renderer2, 
    private el:ElementRef, 
    private route: Router) {}

  
  navegador(ruta:string){
    this.route.navigate([ruta]);
  }




  
  mostrarCarga: boolean = false;
  mostrarGaleria: boolean = true;
  mostrarComics: boolean = false;
  mostrarMangas: boolean = false;
  mostrarEnvioSolicitud: boolean = false;


  toogleGaleria(){
    this.mostrarGaleria = true;
    this.mostrarComics = false;
    this.mostrarMangas = false;
    this.mostrarEnvioSolicitud = false;

  }

  toogleComics(){
    this.mostrarGaleria = false;
    this.mostrarComics = true;
    this.mostrarMangas = false;
    this.mostrarEnvioSolicitud = false; 
  }

  toogleMangas(){
    this.mostrarGaleria = false;
    this.mostrarComics = false;
    this.mostrarMangas = true;
    this.mostrarEnvioSolicitud = false;

  }

  toogleEnvioSolicitud(){
    this.mostrarGaleria = false;
    this.mostrarComics = false;
    this.mostrarMangas = false;
    this.mostrarEnvioSolicitud = true;


  }




}
