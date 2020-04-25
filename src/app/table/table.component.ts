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

  constructor(private transaccionesAPI:TransaccionesAPIService, appComponent: AppComponent) { 

    this.appComponent = appComponent;
  }


  ngOnInit(): void {
    this.transaccionesAPI.getData().subscribe((res: any) => {
      this.appComponent.ArrayTransacciones = res.transacciones;
      this.appComponent.ArrayEntidades = res.entidades;
      this.appComponent.transactionCount = this.appComponent.ArrayTransacciones.length;
    });
  }

}
