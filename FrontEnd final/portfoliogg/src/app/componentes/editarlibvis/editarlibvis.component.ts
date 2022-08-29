import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librovisitas } from 'src/app/model/librovisitas';
import { LibrovisitasService } from 'src/app/service/librovisitas.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-editarlibvis',
  templateUrl: './editarlibvis.component.html',
  styleUrls: ['./editarlibvis.component.css']
})
export class EditarlibvisComponent implements OnInit {

  librovisitas!: Librovisitas;

  constructor(
    private libvisServ: LibrovisitasService, 
    private activatedRouter: ActivatedRoute, 
    private enrutador: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.libvisServ.actualizarPorId(id).subscribe(

      data => {
        this.librovisitas = data;
      },
      err => {
        alert("Error al editar");
        this.enrutador.navigate(['/librovisitas']);
      }
    )
    AOS.init();
  }

  editarMensaje(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    
    this.libvisServ.editarLV(id, this.librovisitas).subscribe(
      data => {
        this.enrutador.navigate(['/librovisitas']);
      },
      err => {
        alert("No se pudo editar");
        this.enrutador.navigate(['/librovisitas']);
      }
    )

  }

}
