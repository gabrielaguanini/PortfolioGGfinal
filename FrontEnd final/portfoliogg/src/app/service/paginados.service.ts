import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginadosService {

  URL="http://localhost:8080/explaboral/";

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.URL + 'listaexplab');
  }
}



