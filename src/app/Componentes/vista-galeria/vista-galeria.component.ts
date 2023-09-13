import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-vista-galeria',
  templateUrl: './vista-galeria.component.html',
  styleUrls: ['./vista-galeria.component.scss']
})
export class VistaGaleriaComponent {

  public craftImagePreview:any;

  constructor(private el:ElementRef, private renderer:Renderer2){

  }


  ngAfterViewInit() {
    let imagenes
  }


  onFileChange(event:any){
    if(event.target.files.length > 0){
      const reader = new FileReader();

      reader.onload = (event:any)=>{
        this.craftImagePreview = event.target.result;

      };

      reader.readAsDataURL(event.target.files[0])


    }
  }


}
