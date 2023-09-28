import { Component, ElementRef, Renderer2 } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private mostrarIcono = true;


  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ){}

  

  toggleIconoContraLogin(){
    const icono = this.el.nativeElement.querySelector('#icono-ojo');
    const password = this.el.nativeElement.querySelector('.password');


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

  toggleIconoContraRegistro(){
    const icono = this.el.nativeElement.querySelector('#mostrar-contraseña');
    const password = this.el.nativeElement.querySelector('#contraseña');


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
  
  ngAfterViewInit(){
    const wrapper = this.el.nativeElement.querySelector('.marco');
    const loginLink = this.el.nativeElement.querySelector('.login-link');
    const registerLink = this.el.nativeElement.querySelector('.register-link');
    const btnPopup = this.el.nativeElement.querySelector('.btnlogin-popup');
    const registro = this.el.nativeElement.querySelector('.registro');

    registerLink.addEventListener('click',()=>{
      this.renderer.addClass(wrapper,'active');
      this.renderer.addClass(loginLink,'active')
      registro.scrollTop = 0;
    });

    
    loginLink.addEventListener('click',()=>{
      this.renderer.removeClass(wrapper,'active');
      this.renderer.removeClass(loginLink,'active')      
    });

    
    btnPopup.addEventListener('click',()=>{
      this.renderer.addClass(wrapper,'active-popup');
    });


  

  }

  nuevoRegistro(){
    

    axios.get('http://localhost:3000/usuario/crear',{
      params:{

      }
    })
  }

}
