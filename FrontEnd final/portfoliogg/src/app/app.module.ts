import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaginaunoComponent } from './componentes/paginauno/paginauno.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaginadosComponent } from './componentes/paginados/paginados.component';
import { AppRoutingModule} from './ruteo/app-routing/app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LibrovisitasComponent } from './componentes/librovisitas/librovisitas.component';
import { FormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { interceptorProvider } from './service/interceptor-service';
import { MsjlibvisComponent } from './componentes/msjlibvis/msjlibvis.component';
import { EditarlibvisComponent } from './componentes/editarlibvis/editarlibvis.component';
import { TrabcrearComponent } from './componentes/trabcrear/trabcrear.component';
import { EditarexplabComponent } from './componentes/editarexplab/editarexplab.component';




@NgModule({
  declarations: [
    AppComponent,
    PaginaunoComponent,
    EncabezadoComponent,
    FooterComponent,
    PaginadosComponent,
    IniciarSesionComponent,
    LibrovisitasComponent,
    MsjlibvisComponent,
    EditarlibvisComponent,
    TrabcrearComponent,
    EditarexplabComponent
   
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
