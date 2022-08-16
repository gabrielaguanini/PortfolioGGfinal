import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from 'src/app/componentes/iniciar-sesion/iniciar-sesion.component';
import { LibrovisitasComponent } from 'src/app/componentes/librovisitas/librovisitas.component';
import { PaginadosComponent } from 'src/app/componentes/paginados/paginados.component';
import { PaginaunoComponent } from 'src/app/componentes/paginauno/paginauno.component';

const routes: Routes = [
  {path: 'paginauno', component:PaginaunoComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'paginados', component:PaginadosComponent},
  {path: 'librovisitas', component:LibrovisitasComponent},
  {path: '', redirectTo:'iniciar-sesion', pathMatch:'full'}

  
  ];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }