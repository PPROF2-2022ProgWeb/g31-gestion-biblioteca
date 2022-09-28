import { UsuarioService } from './../../Services/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  @ViewChild(MatTable) tabla2!: MatTable<Usuario>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private usuarioService: UsuarioService) {}

  cargarUsuario() {
    this.usuarioService.ObtenerUsuarios().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Usuario>(data.result);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
    //funcion para cargar los datos de la variable datos en la tabla
    //this.dataSource = new MatTableDataSource<Usuario>(this.datos);
    this.cargarUsuario();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

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

  //datos que se visualizaran
  datos: Usuario[] = [
    new Usuario(1, 1, 1, 'Juan', 'Ortega', '3514877847', 'San Juan 944'),
    new Usuario(2, 2, 2, 'a', 'b', 'c', 'd'),
    new Usuario(3, 3, 3, 'a', 'b', 'c', 'd'),
    new Usuario(4, 4, 4, 'a', 'b', 'c', 'd'),
    new Usuario(5, 5, 5, 'a', 'b', 'c', 'd'),
    new Usuario(6, 6, 6, 'a', 'b', 'c', 'd'),
  ];
  dataSource: any;

  Usuarioselect: Usuario = new Usuario(1, 1, 1, 'a', 'b', 'c', 'd');


}

//constructor de Usuarios
export class Usuario {
  constructor(
    public id: number,
    public sanciones: number,
    public sanciones_dinero: number,

    public nombre: String,
    public apellido: String,
    public telefono: String,
    public domicilio: String
  ) {}
}

/*
  Integer id,
  Integer sanctions,
  Integer sanc_money,
  String last_name,
  String telefono
  String nombre,
  String domicilio,
*/

/*import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-Usuarios',
  templateUrl: './Usuarios.component.html',
  styleUrls: ['./Usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  ngOnInit() {
    //funcion para cargar los datos de la variable datos en la tabla
      this.dataSource = new MatTableDataSource<Usuario>(this.datos);
      this.dataSource.paginator = this.paginator;
  }
  //metodo para filtrar
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  //fin cosas angular

  //nombrar columnas
  columnas: string[] = ['id', 'bookID', 'Fecha de pedido', 'Fecha de devolucion'];
  //datos que se visualizaran
  datos: Usuario[] =
    [new Usuario(1,1,1,'a','b','c','d'),
    new Usuario(1,1,1,'a','b','c','d'),
    new Usuario(1,1,1,'a','b','c','d'),
    new Usuario(1,1,1,'a','b','c','d'),
    new Usuario(1,1,1,'a','b','c','d'),
    new Usuario(1,1,1,'a','b','c','d'),]
  dataSource: any;

  Usuarioselect: Usuario = new Usuario(1,1,1,'a','b','c','d');

  @ViewChild(MatTable) tabla2!: MatTable<Usuario>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


}

//constructor de Usuarios
export class Usuario {
  constructor(
    public id: number,
    public bookID: number,
    public fecha_pedido: Date,
    public fecha_devolucion: Date) {
  }
}

*/
