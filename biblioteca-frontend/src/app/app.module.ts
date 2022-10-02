import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PrincipalComponent } from './component/principal/principal.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { LibrosComponent } from './component/libros/libros.component';
import { PrestamosComponent } from './component/prestamos/prestamos.component';
import { DevolucionesComponent } from './component/devoluciones/devoluciones.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { NuevoUsuarioComponent } from './component/nuevo-usuario/nuevo-usuario.component';
import { NuevoLibroComponent } from './component/nuevo-libro/nuevo-libro.component';

//tablas
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PrincipalComponent,
    UsuariosComponent,
    LibrosComponent,
    PrestamosComponent,
    DevolucionesComponent,
    ReportesComponent,
    NuevoUsuarioComponent,
    NuevoLibroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    //material tablas
    MatTableModule,
    MatInputModule,
    //paginador
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
