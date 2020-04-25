import { Component, OnInit } from '@angular/core';
import { WebSocketAPI } from './services/WebSocketAPI';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-client: Esta es una app angular';
  webSocketAPI: WebSocketAPI;
  greeting: string;
  name: string;
  status: any;

  ArrayTransacciones = [];
  ArrayEntidades = [];
  transactionCount = 0;
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(this);
    this.greeting = 'Invitado';
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send('Conectado');
  }
  reset(){
    this.greeting = '';
  }

  handleMessage(message: any){
    console.log('Handled message ' + message);
    if(JSON.parse(message).hasOwnProperty('transacciones')){
      this.ArrayTransacciones.unshift(JSON.parse(message).transacciones[0]);
      this.ArrayEntidades = JSON.parse(message).entidades;
      console.log('tamaño del arreglo ' + this.ArrayTransacciones.length);
    }else{
      this.greeting = JSON.parse(message).content;

    }
  }
}
