import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-filtro',
  templateUrl: './productos-filtro.component.html',
  styleUrls: ['./productos-filtro.component.css']
})
export class ProductosFiltroComponent implements OnInit {
  datos!:any;


  constructor(private Producto: ProductoService){}


  ngOnInit(): void {
    this.Producto.getProductosDestacado().subscribe(
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
