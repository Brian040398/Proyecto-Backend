import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';


@Component({
  selector: 'app-getall-transaccion',
  templateUrl: './getall-transaccion.component.html',
  styleUrls: ['./getall-transaccion.component.css']
})
export class GetallTransaccionComponent implements OnInit {

  datos: any;


  constructor(private Transaccion: TransaccionService){}


  ngOnInit(): void {
    this.Transaccion.getTransaccion().subscribe(
      (data) => {
        this.datos = data;
        console.log(data);

      },
      (error) => {
        console.error(error);
      }
    );
  }



}
