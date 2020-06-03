import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../providers/chat.service';
import { Mensaje } from '../../interfaces/mensaje.interface';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  public chats: Mensaje[] = [];
  elemento: any;
  mensaje = '';

  constructor( public _cs: ChatService) {
   this._cs.cargarMensajes()
    .subscribe( resp => {
      this.chats = resp;
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
   }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0 ) {
      return ;
    }
    this._cs.agregarMensaje(this.mensaje)
    .then(() => this.mensaje = '')
    .catch((err) => console.log('Error al enviar', err));
  }

}
