import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { map, catchError, tap } from 'rxjs/operators';

const endpointCuentas = '/Modulo-Cuentas-Pll-web/api/cuenta/'; //1004456891
const endpointPrestamos = '/ServicioPrestamo/api/prestamo';
const endpointUsuarioKYC = '/KYC-mongo-rest-web/api/cliente/cedula/'; //1007785605

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getUnUsuario(nCedula:String): Observable<any> {
    return this.http.get(endpointUsuarioKYC+nCedula).pipe(
      map(this.extractData));
  }

  getListaCuentas(nCedula:String): Observable<any> {
    return this.http.get(endpointCuentas+nCedula).pipe(
      map(this.extractData));
  }

  getListaPrestamos(): Observable<any> {
    return this.http.get(endpointPrestamos).pipe(
      map(this.extractData));
  }

}
