import { Component, OnInit } from '@angular/core';
import { TransaccionesAPIService } from '../services/transacciones-api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  appComponent: AppComponent;

  constructor(private transaccionesAPI: TransaccionesAPIService, appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  ngOnInit(): void {
    this.transaccionesAPI.getData().subscribe((res: any) => {
      this.appComponent.ArrayBalotasPorJugar = res.jugadas[0];
      this.appComponent.ArrayB = res.jugadas[1];
      this.appComponent.ArrayI = res.jugadas[2];
      this.appComponent.ArrayN = res.jugadas[3];
      this.appComponent.ArrayG = res.jugadas[4];
      this.appComponent.ArrayO = res.jugadas[5];
      this.appComponent.ultimaBalota = res.ultimaJugada;
    });
  }
}