import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Socket, io } from 'socket.io-client';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {

  
  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });
  panelOpenState = false;


  private Usuario:string = '';
  private Hora:string = '';
  public socket:any;


  private mostrarLogin = true;

  constructor(
      private _formBuilder: FormBuilder,
      private el:ElementRef,
      private renderer:Renderer2,
      private html:HttpClient

    ){

      this.Hora = new Date().toLocaleTimeString();


      this.socket = io('http://localhost:3000/');




        
      this.socket.on("connect", () => {
            console.log(`Usuario conectado: ${this.socket.id}`);
      });

      this.socket.on("disconnect",()=>{
      });

      
      this.socket.on('mensaje',(u:any,t:any,h:any)=>{
      
        const usuario = this.renderer.createElement('span');
        this.renderer.addClass(usuario,'usuario');
        usuario.textContent = u;

        const hora = this.renderer.createElement('span');
        this.renderer.addClass(hora,'hora');
        hora.textContent = h;

        const mensaje = this.renderer.createElement('p');
        this.renderer.addClass(mensaje,'texto');
        mensaje.textContent = t;

        const div = this.renderer.createElement('div');
        this.renderer.addClass(div,'user-message')
        const chat = this.el.nativeElement.querySelector('.chat-container');
        this.renderer.appendChild(div,usuario);
        this.renderer.appendChild(div,hora);
        this.renderer.appendChild(div,mensaje);
        this.renderer.appendChild(chat,div);


          
        var chatHeight = chat.scrollHeight;
        chat.scrollTop = chatHeight;

      });
  
            
      this.socket.on('message', (message:any) => {
        const messages = el.nativeElement.querySelector('#messages');
        const li = renderer.createElement('li');
        li.textContent = message;
        renderer.appendChild(messages,li);
      });



      
  }


  joinRoom() {
    const roomName = this.el.nativeElement.querySelector('#canal').value;
    this.socket.emit('joinRoom', roomName);
  }

  sendMessage() {
    const roomName = this.el.nativeElement.querySelector('#canal').value;
    const message = this.el.nativeElement.querySelector('#message').value;
    this.socket.emit('sendMessage', roomName, message);
  }




  // sendMessage() {
  //   const messageInput = this.el.nativeElement.querySelector('#message-input');
  //   const messageText = messageInput.value.trim();
  //   if (messageText !== '') {

  //       const messageContainer = this.renderer.createElement('div');

  //       messageContainer.className = 'user-message';
  //       messageContainer.textContent = messageText;

  //       const chat = this.el.nativeElement.querySelector('.chat-container');
  //       this.renderer.appendChild(chat,messageContainer);

  //       messageInput.value = '';

          
  //       var chatHeight = chat.scrollHeight;
  //       chat.scrollTop = chatHeight;
  //   }
  // }

  
  ngOnInit() {
      
    this.html.get('assets/data.json').subscribe((data:any)=>{

      const localhost = data['localhost'];
      const port = data['port'];  

    
    });

  }



  ngAfterViewInit(){

    const chat = this.el.nativeElement.querySelector('.chat-container');
      
    var chatHeight = chat.scrollHeight;
    chat.scrollTop = chatHeight;

  }



  cargandoFecha(fecha = ''){
    const div = this.renderer.createElement('div');

    this.renderer.addClass(div,'fecha');
    div.textContent = fecha;

    const chat = this.el.nativeElement.querySelector('.chat-container');
    this.renderer.appendChild(chat,div);

    var chatHeight = chat.scrollHeight;
    chat.scrollTop = chatHeight;

  }
  
  cargarMensajes(Usuario = '', Hora = '', Mensaje=''){
      
    const usuario = this.renderer.createElement('span');
    this.renderer.addClass(usuario,'usuario');
    usuario.textContent = Usuario;

    const hora = this.renderer.createElement('span');
    this.renderer.addClass(hora,'hora');
    hora.textContent = Hora;

    const mensaje = this.renderer.createElement('p');
    this.renderer.addClass(mensaje,'texto');
    mensaje.textContent = Mensaje;

    const div = this.renderer.createElement('div');
    this.renderer.addClass(div,'message')
    const chat = this.el.nativeElement.querySelector('.chat-container');
    this.renderer.appendChild(div,usuario);
    this.renderer.appendChild(div,hora);
    this.renderer.appendChild(div,mensaje);
    this.renderer.appendChild(chat,div);


      
    var chatHeight = chat.scrollHeight;
    chat.scrollTop = chatHeight;
  }

  EnviarMensajes(){
    
    const cajaTexto = this.el.nativeElement.querySelector('#message-input');
    const cajaTexto2 = this.el.nativeElement.querySelector('#usuario');
    const cajaTexto3 = this.el.nativeElement.querySelector('#canal');
    
      const mensaje = cajaTexto.value.trim(); 
      const usuario = cajaTexto2.value.trim();
      const canal = cajaTexto3.value.trim();


      if(mensaje != '' && usuario != '' && canal){
        this.socket.emit('enviarMensaje',mensaje,usuario,canal,this.Hora)
        cajaTexto.value = '';
      }
  }


}
