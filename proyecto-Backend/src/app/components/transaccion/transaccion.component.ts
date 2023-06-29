import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {


    conver:Transaccion;
    transaccionExitosa=false;
    errorTransaccion= false;
    monedaOrigen!:string;
    cantidadOrigen!:number;
    monedaDestino!:string;
    cantidadDestino!:number;
    emailCliente!:string;
    tasaConversion!:number;




  constructor(private router: Router,private conversorService : TransaccionService) {
    this.conver = new Transaccion();
   }


  ngOnInit(): void {
  }



  convertir(){
    this.conversorService.getConversor(this.conver.cant,this.conver.de,this.conver.a).subscribe(
      result =>{
        console.log(result);
        this.cantidadDestino = result['result'];

        this.cantidadOrigen=result['from-value'];
        this.monedaOrigen=result['from-type'];
        this.monedaDestino=result['to-type'];

      },
      error=>{
        console.log(error);

      }
    )
  }

  crearTransaccion() {
    const transaccion = {
      monedaOrigen: this.monedaOrigen,
      cantidadOrigen: this.cantidadOrigen,
      monedaDestino: this.monedaDestino,
      cantidadDestino: this.cantidadDestino,
      emailCliente: this.emailCliente,
      tasaConversion: this.tasaConversion
    };

    this.conversorService.createTransaccion(transaccion).subscribe(
      (data) => {
        console.log(data);
        this.transaccionExitosa=true;
        this.emailCliente = '';
        this.cantidadOrigen = NaN;
        this.monedaOrigen = '';
        this.monedaDestino = '';
        this.cantidadDestino = NaN;
        this.tasaConversion = NaN;

      },
      (error) => {

        this.transaccionExitosa = false;
        this.errorTransaccion = true;
        console.error(error);
      }
    );
  }

  getTransaccion() {
    this.conversorService.getTransaccion().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }





  navegarTodo(){
    this.conversorService.getTransaccion().subscribe(
      (datos)=>{
        window.open('/todo', '_blank');
      },
      (error)=>{
        console.error('error al obtener los datos', error);
      }
    );
    //this.router.navigateByUrl('/todo');
  }

  navegarFiltro(){
    window.open('/filtro', '_blank');
    //this.router.navigateByUrl('/filtro');
  }

}
