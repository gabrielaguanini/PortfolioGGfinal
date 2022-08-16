import { Component, OnInit } from '@angular/core';
import { Librovisitas } from 'src/app/model/librovisitas';
import { LibrovisitasService } from 'src/app/service/librovisitas.service';

@Component({
  selector: 'app-librovisitas',
  templateUrl: './librovisitas.component.html',
  styleUrls: ['./librovisitas.component.css']
})
export class LibrovisitasComponent implements OnInit {

  librovisitas:Librovisitas[] =[];

//DE NEW EDUCACION////////////////////////////////////////////////////////////////////
nombreLV!:string;
mensajeLV!:string;

//DE NEW EDUCACION////////////////////////////////////////////////////////////////////





  constructor(private libVisService:LibrovisitasService) { 
    
    
  }

  ngOnInit(): void {
    this.cargarLibVis();
  }
cargarLibVis():void{
  this.libVisService.listaLibVis().subscribe(
    data=>{
      this.librovisitas = data;
    }
  )
}

borrarLibVis(id?:number){
  if(id != undefined){
    this.libVisService.borrarLibVis(id).subscribe(
      data=>{
        this.cargarLibVis();
      },
      err =>{
        alert("No se eliminó");
      }
    )
  }
}

//DE NEW EDUCACION////////////////////////////////////////////////////////////////////

onCreate():void{
  const libvis = new Librovisitas(this.nombreLV, this.mensajeLV);
  this.libVisService.crearMensaje(libvis).subscribe(
    data=>{
      alert("Nombre añadido");
     }
  )
}

//DE NEW EDUCACION////////////////////////////////////////////////////////////////////

}
