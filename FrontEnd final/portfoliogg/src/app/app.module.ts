import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaginaunoComponent } from './componentes/paginauno/paginauno.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaginadosComponent } from './componentes/paginados/paginados.component';
import { AppRoutingModule} from './ruteo/app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LibrovisitasComponent } from './componentes/librovisitas/librovisitas.component';




@NgModule({
  declarations: [
    AppComponent,
    PaginaunoComponent,
    EncabezadoComponent,
    FooterComponent,
    PaginadosComponent,
    IniciarSesionComponent,
    LibrovisitasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
