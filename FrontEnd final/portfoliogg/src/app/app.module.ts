import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PaginadosComponent } from './componentes/paginados/paginados.component';
import { PaginaunoComponent } from './componentes/paginauno/paginauno.component';
import { AppRoutingModule } from './ruteo/app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { interceptorProvider } from './service/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    IniciarSesionComponent,
    PaginadosComponent,
    PaginaunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
