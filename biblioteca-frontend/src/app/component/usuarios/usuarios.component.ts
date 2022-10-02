import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  ];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.usuarioService.ObtenerUsuarios().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

export class Usuario {
  id?: number;
  sanctions?: number;
  sanc_money?: number;
  name?: string="";
  last_name?: string="";
  domicilio?: string="";
  tel?: string="";
}


