import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarlibvisComponent } from 'src/app/componentes/editarlibvis/editarlibvis.component';
import { IniciarSesionComponent } from 'src/app/componentes/iniciar-sesion/iniciar-sesion.component';
import { LibrovisitasComponent } from 'src/app/componentes/librovisitas/librovisitas.component';
import { MsjlibvisComponent } from 'src/app/componentes/msjlibvis/msjlibvis.component';
import { PaginadosComponent } from 'src/app/componentes/paginados/paginados.component';
import { PaginaunoComponent } from 'src/app/componentes/paginauno/paginauno.component';

const routes: Routes = [

  { path: 'paginauno', component: PaginaunoComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'paginados', component: PaginadosComponent },
  { path: 'librovisitas', component: LibrovisitasComponent },
  { path: 'mensajelibvis', component: MsjlibvisComponent },
  { path: 'editarlib/:id', component: EditarlibvisComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }