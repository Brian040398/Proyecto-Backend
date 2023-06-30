import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-filtro-transaccion',
  templateUrl: './filtro-transaccion.component.html',
  styleUrls: ['./filtro-transaccion.component.css']
})
export class FiltroTransaccionComponent {

    conver:Transaccion;
    transacciones!: Array<Transaccion>;
    monedaOrigenFiltrar!: string;
    monedaDestinoFiltrar!: string;

  constructor(private router: Router,private conversorService : TransaccionService) {
    this.conver = new Transaccion();
   }




   filtrarPorMoneda() {
    this.conversorService.getFiltro(this.monedaOrigenFiltrar, this.monedaDestinoFiltrar).subscribe(
      result => {
        this.transacciones = [];
        Object.assign(this.transacciones, result);
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

}
