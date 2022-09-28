import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevolucionesComponent } from './component/devoluciones/devoluciones.component';
import { LibrosComponent } from './component/libros/libros.component';
import { PrestamosComponent } from './component/prestamos/prestamos.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { NuevoLibroComponent } from './component/nuevo-libro/nuevo-libro.component';
import { NuevoUsuarioComponent } from './component/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  
  {path: "principal", component: PrincipalComponent} ,
  {path: "usuarios", component: UsuariosComponent} ,
  {path: "libros", component: LibrosComponent },
  {path: "reportes", component: ReportesComponent },
  {path: "devoluciones", component: DevolucionesComponent },
  {path: "prestamos", component: PrestamosComponent },
  {path: "nuevo-libro", component:NuevoLibroComponent},
  {path: "nuevo-usuario", component: NuevoUsuarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
