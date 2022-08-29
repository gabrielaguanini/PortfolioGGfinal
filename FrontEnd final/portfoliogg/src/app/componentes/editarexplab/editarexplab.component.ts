import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginados } from 'src/app/model/paginados';
import { PaginadosService } from 'src/app/service/paginados.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-editarexplab',
  templateUrl: './editarexplab.component.html',
  styleUrls: ['./editarexplab.component.css']
})
export class EditarexplabComponent implements OnInit {

  paginados!: Paginados;

  constructor(
    private pagdosServ: PaginadosService, 
    private activatedRouter: ActivatedRoute, 
    private enrutador: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];

    this.pagdosServ.actualizarPorId(id).subscribe(
      
      data => {
        this.paginados =data;
      },
      err =>{
        alert("Error al editar");
        this.enrutador.navigate(['/paginados']);
      }
    )
      AOS.init();
  }

  editarExpLab():void{

    const id = this.activatedRouter.snapshot.params['id'];

    this.pagdosServ.editarExpLab(this.paginados).subscribe(
      data =>{
        this.enrutador.navigate(['/paginados']);
      },
    err => {
    alert("Error al editar");
    this.enrutador.navigate(['/paginados']);
   }
    )
  }

}
