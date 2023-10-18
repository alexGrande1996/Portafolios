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


      //Activar los botones para poder movernos 
      if(imagenes > 1){
        const btnIzq = this.el.nativeElement.querySelector('#izquierda');
        this.renderer.removeClass(btnIzq,'desactivar');
        const btnDer = this.el.nativeElement.querySelector('#derecha');
        this.renderer.removeClass(btnDer,'desactivar');
      }

      for (let a = 1; a < this.data.length; a++) {
        const element = this.data[a];
        this.cargarComponentesImagenes(element.url,element.titulo,element.descripcion);
        
      }
    
  }

  cargarComponentesImagenes(url:string,titulo:string,texto:string){
    
    const div = this.renderer.createElement('div');
    
    this.renderer.addClass(div,'diapositiva');
    this.renderer.addClass(div,'carousel-item');
    this.renderer.addClass(div,'active');

    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img,"src",url);

    this.renderer.addClass(img,'d-block');
    this.renderer.addClass(img,'w-100');

    const descripcion = this.renderer.createElement('div')

    this.renderer.addClass(descripcion,'carousel-caption');
    this.renderer.addClass(descripcion,'d-none');
    this.renderer.addClass(descripcion,'d-md-block');

    const h5 = this.renderer.createElement('h5');
    const p = this.renderer.createElement('p');

    h5.textContent = titulo;
    p.textContent = texto;

    this.renderer.appendChild(descripcion,h5);
    this.renderer.appendChild(descripcion,p);


    this.renderer.appendChild(div,img);
    this.renderer.appendChild(div,descripcion);


    const imagenes = this.el.nativeElement.querySelector('#imagenes');

    this.renderer.appendChild(imagenes,div);

  }


}
