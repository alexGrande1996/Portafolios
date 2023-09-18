import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';

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


  private mostrarLogin = true;
  private socket;

  constructor(
      private _formBuilder: FormBuilder,
      private el:ElementRef,
      private renderer:Renderer2

    ){

    this.socket = io('http://localhost:3000/');
    this.socket.on("connect", () => {
   
      console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx


      this.socket.emit('mensaje','Hola servidor');
    });

    this.socket.on('mensaje',(data)=>{
      console.log(data);
    });


  }



  sendMessage() {
    const messageInput = this.el.nativeElement.querySelector('#message-input');
    const messageText = messageInput.value.trim();
    if (messageText !== '') {

      

        const messageContainer = this.renderer.createElement('div');

        messageContainer.className = 'user-message';
        messageContainer.textContent = messageText;

        const chat = this.el.nativeElement.querySelector('.chat-container');
        this.renderer.appendChild(chat,messageContainer);

        messageInput.value = '';
    }
}


}
