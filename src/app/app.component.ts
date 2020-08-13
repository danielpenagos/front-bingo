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

  ArrayBalotasPorJugar = [];
  ArrayB = [];
  ArrayI = [];
  ArrayN = [];
  ArrayG = [];
  ArrayO = [];
  ultimaBalota = 0;

  cartonValidado = 0;
  carton = [];
  validandoCarton = false;
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(this);
    this.greeting = 'Invitado';
    this.webSocketAPI._connect();
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
    if(JSON.parse(message).hasOwnProperty('jugadas')){
      this.ArrayBalotasPorJugar = (JSON.parse(message).jugadas[0]);
      //this.ArrayBalotasPorJugar = ((message).jugadas[0]);
      this.ArrayB = (JSON.parse(message).jugadas[1]);
      this.ArrayI = (JSON.parse(message).jugadas[2]);
      this.ArrayN = (JSON.parse(message).jugadas[3]);
      this.ArrayG = (JSON.parse(message).jugadas[4]);
      this.ArrayO = (JSON.parse(message).jugadas[5]);
      this.ultimaBalota = JSON.parse(message).ultimaJugada;
      this.validandoCarton = false;
      console.log('tamaño del arreglo ' + this.ArrayTransacciones.length);
    }else if((JSON.parse(message).hasOwnProperty('carton'))){
      this.cartonValidado = (JSON.parse(message).id);
      //this.ArrayBalotasPorJugar = ((message).jugadas[0]);
      this.carton = (JSON.parse(message).carton);
      this.validandoCarton = true;

    }else{
      this.greeting = JSON.parse(message).content;

    }
  }
}
