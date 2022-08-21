import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit, OnDestroy {

interval:any;

  constructor(private ruta: Router) {
    

  }
  

  ngOnInit(): void {
     let reemplazoThis=this;
     this.interval = setInterval(function() {
      reemplazoThis.navegar();
  }, 5000);



  }



  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  





  navegar(): void {
    
    this.ruta.navigate(['/iniciar-sesion']);
   }

  
  

}




