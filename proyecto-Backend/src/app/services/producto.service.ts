import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase:string='http://localhost:3000/api/producto';


  constructor(private http: HttpClient) { }

  getProducto() {
    const url = 'http://localhost:3000/api/producto';
    return this.http.get(url);
  }



  createProducto(agenteData: any) {
    const url = 'http://localhost:3000/api/producto/post';
    return this.http.post(url, agenteData);

  }



  getProductosDestacado():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this.http.get(this.urlBase+"?destacado=true", httpOption);
  }







}
