import { Component, ElementRef, Renderer2 } from '@angular/core';
import {io} from 'socket.io-client';

@Component({
  selector: 'app-vista-galeria',
  templateUrl: './vista-galeria.component.html',
  styleUrls: ['./vista-galeria.component.scss']
})
export class VistaGaleriaComponent {

  public craftImagePreview:any;

  constructor(private el:ElementRef, private renderer:Renderer2){
    const socket = io('http://localhost:3000/');
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
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
