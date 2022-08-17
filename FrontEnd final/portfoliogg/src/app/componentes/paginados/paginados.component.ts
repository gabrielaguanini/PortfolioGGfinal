import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginadosService } from 'src/app/service/paginados.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.css']
})
export class PaginadosComponent implements OnInit {
   trabajosLista:any;
   isLogged=false;

  constructor(private router:Router, private pagindadosServ:PaginadosService, private tokenServ:TokenService) { }

  ngOnInit(): void {
    this.cargarDatos();

    if(this.tokenServ.getToken()){
       this.isLogged=true;
    } else{
      this.isLogged=false;
    }
    
   
  }

  cargarDatos():void{
    this.pagindadosServ.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.trabajosLista=data[0]; //duda con esto, listaexplab la saque del path de la api
    })
    
  }

}
