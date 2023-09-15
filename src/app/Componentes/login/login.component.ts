import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Socket, io } from 'socket.io-client';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private mostrarLogin = true;
  private mostrarIcono = true;
  private mostrarIndicador = false;

 

  constructor(
      private _formBuilder: FormBuilder,
      private el:ElementRef,
      private renderer:Renderer2,
      private html:HttpClient
    ){}


  ngOnInit() {
      
    this.html.get('assets/data.json').subscribe((data:any)=>{

      const localhost = data['localhost'];
      const port = data['port'];  

      let ruta = `http://${localhost}:${port}/`;
      const socket = io(ruta);

        
      socket.on("connect", () => {
        this.toggleAviso(true);
    
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        socket.emit('mensaje','Hola servidor');
      });

      socket.on("disconnect",()=>{
        this.toggleAviso(false);
      });

      socket.on('mensaje',(data:any)=>{
        console.log(data);
      });
     
    });

  }

  toggleLogin(){
    const login = this.el.nativeElement.querySelector('.login');
    const barrera = this.el.nativeElement.querySelector('.barrera');

    if(this.mostrarLogin){
      this.renderer.addClass(login,'login-cerrado');
      this.renderer.addClass(barrera,'closed');

    }
    else{      
      this.renderer.removeClass(login,'login-cerrado');
      this.renderer.removeClass(barrera,'closed');
    }
    this.mostrarLogin = !this.mostrarLogin;
  }

  toggleIcono(){
    const icono = this.el.nativeElement.querySelector('#icono-ojo');
    const password = this.el.nativeElement.querySelector('#password');


    if(this.mostrarIcono){
      this.renderer.setProperty(password,'type','text');
      this.renderer.removeClass(icono,'bi-eye-slash-fill');
      this.renderer.addClass(icono,'bi-eye-fill');
    }
    else{
      this.renderer.setProperty(password,'type','password');
      this.renderer.removeClass(icono,'bi-eye-fill');
      this.renderer.addClass(icono,'bi-eye-slash-fill');
    }
    this.mostrarIcono = !this.mostrarIcono;

  }

  toggleAviso(valor:boolean){
    this.mostrarIndicador = valor;
    const indicador = this.el.nativeElement.querySelector('.indicador');

    if(valor){
      indicador.textContent  = "ON";
      this.renderer.addClass(indicador,'indicadorEncendido');
    }
    else{
      indicador.textContent  = "OFF";
      this.renderer.removeClass(indicador,'indicadorEncendido');
    }
  }

}
