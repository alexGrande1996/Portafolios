import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private mostrarLogin = true;
  private mostrarIcono = true;
  public nombre = "text";
  private socket;

  constructor(
      private _formBuilder: FormBuilder,
      private el:ElementRef,
      private renderer:Renderer2

    ){

    this.socket = io('http://192.168.0.13:3000/');
    this.socket.on("connect", () => {
   
      console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx


      this.socket.emit('mensaje','Hola servidor');
    });

    this.socket.on('mensaje',(data)=>{
      console.log(data);
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


    if(this.mostrarIcono){
      console.log('mostrar')
      this.renderer.setProperty(icono,'type','text');
      this.renderer.removeClass(icono,'bi-eye-slash-fill');
      this.renderer.addClass(icono,'bi-eye-fill');
          
    }
    else{
      this.renderer.setProperty(icono,'type','password');
      this.renderer.removeClass(icono,'bi-eye-fill');
      this.renderer.addClass(icono,'bi-eye-slash-fill');
          
    }


    this.mostrarIcono = !this.mostrarIcono;
  }

}
