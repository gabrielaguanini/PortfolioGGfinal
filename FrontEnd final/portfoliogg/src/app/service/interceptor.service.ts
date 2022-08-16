import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AutenticationService } from './autenticacion.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionService:AutenticationService) { }

  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
   
    var currentUser = this.autenticacionService.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req= req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}` 
        }
      })
    }
    console.log("Interceptor está corriendo" + JSON.stringify(currentUser));
    return next.handle(req);
  }

}
