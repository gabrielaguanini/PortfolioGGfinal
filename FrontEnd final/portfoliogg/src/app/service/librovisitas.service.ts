import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Librovisitas } from '../model/librovisitas';

@Injectable({
  providedIn: 'root'
})
export class LibrovisitasService {

  lvURL = 'http://localhost:8080/librovisitas/';
  constructor(private httpClient : HttpClient) { }

  public listaLibVis():Observable<Librovisitas[]>{

    return this.httpClient.get<Librovisitas[]>(this.lvURL + 'listalibvis');
  }

  public actualizarPorId (id:number):Observable<Librovisitas>{
    return this.httpClient.get<Librovisitas>(this.lvURL + `actualizarporid/${id}`)
  }
  
  public crearMensaje (libVis:Librovisitas):Observable<any>{
    return this.httpClient.post<Librovisitas>(this.lvURL + 'crearmensaje', Librovisitas )
  }

  public editarLV(id:number, libVis:Librovisitas):Observable<any>{
    return this.httpClient.put<Librovisitas>(this.lvURL + `actualizarlibrovis/${id}`, Librovisitas)
  }

  public borrarLibVis(id:number):Observable<any>{
    return this.httpClient.delete<Librovisitas>(this.lvURL + `borrarlibvis/${id}`)
  }
}
