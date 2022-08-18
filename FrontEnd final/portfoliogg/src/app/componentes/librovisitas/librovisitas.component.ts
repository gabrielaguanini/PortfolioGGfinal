import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Librovisitas } from 'src/app/model/librovisitas';
import { LibrovisitasService } from 'src/app/service/librovisitas.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-librovisitas',
  templateUrl: './librovisitas.component.html',
  styleUrls: ['./librovisitas.component.css']
})
export class LibrovisitasComponent implements OnInit {

  libroVisitasMostrar: Librovisitas[] = [];
  isLogged = false;

  constructor(private libvisServ: LibrovisitasService, private tokenService: TokenService) { }


  ngOnInit(): void {

    this.mostrarListaLibVis();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;

    }
  }
  //cargarEducacion()
  mostrarListaLibVis(): void {
    this.libvisServ.listaLibVis().subscribe(
      data => {
        this.libroVisitasMostrar = data;
      }
    )
  }

  borrarMensaje(id?: number) {
    if (id != undefined) {
      this.libvisServ.borrarLibVis(id).subscribe(
        data => {
          this.mostrarListaLibVis();
        },
        err => {
          alert("No se eliminó");
        }
      )
    }
  }
}