import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {



  constructor(private http: HttpClient) { }

  getProducto() {
    const url = 'http://localhost:3000/api/producto';
    return this.http.get(url);
  }

  createProducto(agenteData: any) {
    const url = 'http://localhost:3000/api/producto/post';
    return this.http.post(url, agenteData);

  }





}
