import { LibroService } from './../../Services/libro.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource: MatTableDataSource<Libro> = new MatTableDataSource<Libro>();

  //nombrar columnas
  columnas: string[] = [
    'LibroID',
    'Titulo',
    'Autor',
    'Categoria',
    'Idioma',
    'Disponibles',
    'Ejemplares',
    'Edicion',
  ];

  constructor(private libroService: LibroService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarLibros();
  }

  cargarLibros() {
    this.libroService.ObtenerUsuarios().subscribe(data => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

//constructor de Libros
export interface Libro {
  id?: number;
  disponibilidad?: number;
  title?: string;
  autor?: string;
  edit?: string;
  idioma?: string;
  categoria?: string;
  ejemplares?: string;
}
