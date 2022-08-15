import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EditareduComponent } from 'src/app/componentes/educacion/editaredu/editaredu.component';
//import { EducacionComponent } from 'src/app/componentes/educacion/educacion.component';
//import { NeweducacionComponent } from 'src/app/componentes/educacion/neweducacion.component';
import { IniciarSesionComponent } from 'src/app/componentes/iniciar-sesion/iniciar-sesion.component';
import { PaginadosComponent } from 'src/app/componentes/paginados/paginados.component';
import { PaginaunoComponent } from 'src/app/componentes/paginauno/paginauno.component';

const routes: Routes = [
  {path: 'paginauno', component:PaginaunoComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'paginados', component:PaginadosComponent},
  //{path: 'educacion', component:EducacionComponent},
  //{path: 'nuevaedu', component:NeweducacionComponent},
  //{path: 'editareducacion/:id', component:EditareduComponent},
  {path: '', redirectTo:'iniciar-sesion', pathMatch:'full'}
  
  ];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }