import { Component, ElementRef, Renderer2,Input } from '@angular/core';

interface Imagenes{
  url:string,
  titulo:string,
  descripcion:string
}

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {

  @Input() data:Imagenes[] = [];


  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ){}


  ngAfterViewInit(){
      const imagenes = this.data.length;

      if(imagenes > 1){
        
      }

      if(imagenes > 0){
        const bt1 = this.el.nativeElement.querySelect('#btn1');
        const dia1 = this.el.nativeElement.querySelect('#dia1');
      }

      if(imagenes > 1){
        const bt1 = this.el.nativeElement.querySelect('#btn2');
        const dia1 = this.el.nativeElement.querySelect('#dia2');
      }

      if(imagenes > 2){
        const bt1 = this.el.nativeElement.querySelect('#btn3');
        const dia1 = this.el.nativeElement.querySelect('#dia3');
      }

      if(imagenes > 3){
        const bt1 = this.el.nativeElement.querySelect('#btn4');
        const dia1 = this.el.nativeElement.querySelect('#dia4');
      }

      if(imagenes > 4){
        const bt1 = this.el.nativeElement.querySelect('#btn5');
        const dia1 = this.el.nativeElement.querySelect('#dia5');
      }

  
  }




}
