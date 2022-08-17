import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Librovisitas } from 'src/app/model/librovisitas';
import { LibrovisitasService } from 'src/app/service/librovisitas.service';

@Component({
  selector: 'app-librovisitas',
  templateUrl: './librovisitas.component.html',
  styleUrls: ['./librovisitas.component.css']
})
export class LibrovisitasComponent implements OnInit {

  libroVisitasMostrar: Librovisitas[] = [];
  nombreLV!: string;
  mensajeLV!: string;


  constructor(private libvisServ: LibrovisitasService) { }
  

  ngOnInit(): void
{
 
  



  }

  mostrarListaLibVis(): void {
    this.libvisServ.listaLibVis().subscribe(
      data => {
        this.libroVisitasMostrar = data;
      }
    )
  }

 
crearMensaje():void{
    const libroVisitas = new Librovisitas(this.nombreLV, this.mensajeLV);
    this.libvisServ.crearMensaje(libroVisitas).subscribe(data=>{
      console.log("Datos personales" + JSON.stringify(data));
      this.libvisServ=data[0];
    } )
  }
}