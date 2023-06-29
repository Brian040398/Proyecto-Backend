import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http:HttpClient) { }

  getConversor(value:string, type:string, to:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        //'content-type': 'application/x-www-form-urlencoded',
        //'X-RapidAPI-Key': '109aa8ac7dmshc2d9f5b4044ea66p168a6ejsnd0b01e40511d',
        //'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    };
    const body = new HttpParams()
    .set('from-value', value)
    .set('from-type', type)
    .set('to-type', to);
    return this.http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body , httpOptions  );
  }


  createTransaccion(agenteData: any) {
    const url = 'http://localhost:3000/api/transaccion/post/';
    return this.http.post(url, agenteData);

  }

  getTransaccion() {
    const url = 'http://localhost:3000/api/Transaccion/';
    return this.http.get(url);
  }
}

