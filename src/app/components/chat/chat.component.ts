import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {

  mensaje = '';
  constructor() { }

  envar_mensaje() {
    console.log(this.mensaje);
  }

}
