import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent  {
  productosDestacados!: Producto[];
  nombre!: string;
  descripcion!: string;
  imagen!: string;
  precio!: number;
  stock!: number;
  destacado!: boolean;

  constructor(private Producto: ProductoService){}






  crearProducto() {
    const producto = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      imagen: this.imagen,
      precio: this.precio,
      stock: this.stock,
      destacado: this.destacado
    };

    this.Producto.createProducto(producto).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getProducto() {
    this.Producto.getProducto().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }



}
