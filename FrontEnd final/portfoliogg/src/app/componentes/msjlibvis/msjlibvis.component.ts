import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Librovisitas } from 'src/app/model/librovisitas';
import { LibrovisitasService } from 'src/app/service/librovisitas.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-msjlibvis',
  templateUrl: './msjlibvis.component.html',
  styleUrls: ['./msjlibvis.component.css']
})
export class MsjlibvisComponent implements OnInit {

  nombreLV!: string;
  mensajeLV!: string;


  constructor(private libvisServ: LibrovisitasService, 
              private tokenService: TokenService, 
              private ruteador: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()==null){
      this.ruteador.navigate(['iniciar-sesion']);
    }
  }

  crearMensaje(): void {
    const libroVis = new Librovisitas(this.nombreLV, this.mensajeLV);

    this.libvisServ.crearMensaje(libroVis).subscribe(
      data => {
        alert("Mensaje enviado");
        this.ruteador.navigate(['/librovisitas']);
      },
      err => {
        alert("Mensaje no enviado");
        this.ruteador.navigate(['/librovisitas']);
      }
    )
    AOS.init();
  }

}
