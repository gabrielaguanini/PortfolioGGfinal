import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paginados } from 'src/app/model/paginados';
import { PaginadosService } from 'src/app/service/paginados.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.css']
})
export class PaginadosComponent implements OnInit {
  paginados: Paginados[] = [];
  isLogged = false;

  constructor(private pagdosServ: PaginadosService, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.mostrarExpLab();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }


  }

  public mostrarExpLab() {
    this.pagdosServ.listaexplab().subscribe(
      data => {
        this.paginados = data;
      }
    )
  }

  public borrarExpLab(id?: number) {
    this.pagdosServ.borrarExpLab(id).subscribe(
      data => {
        this.mostrarExpLab();
      },
      err => {
        alert("No se pudo eliminar");
      }
    )
  }
}


