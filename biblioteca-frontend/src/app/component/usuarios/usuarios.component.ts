import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from './../../Services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();

  //nombrar columnas
  columnas: string[] = [
    'UsuarioID',
    'Nombre',
    'Apellido',
    'Sanciones',
    'Dinero', //dinero de sanciones
    'Telefono',
    'Domicilio',
    'Borrar',
    'Editar',
  ];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.usuarioService.ObtenerUsuarios().subscribe((data) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  //funcion borrar

  borrarFila(id: number) {
    if (confirm("¿Realmente quiere borrar los datos?")) {
      this.usuarioService.EliminarUsuario(id);
      setTimeout(() => {
        this.cargarUsuario();
      },
      300);
    }
  }
}
