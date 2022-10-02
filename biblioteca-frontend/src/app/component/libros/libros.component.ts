import { Libro, LibroService } from './../../Services/libro.service';
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
    'Borrar',
    'Editar'
  ];

  constructor(private libroService: LibroService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarLibros();
  }

  cargarLibros() {
    this.libroService.ObtenerLibros().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  // editarLibro(libro: Libro): void {
  //   this.librosService.editarLibro(libro).subscribe(() => {
  //     this.isModalOpen = false;
  //     this.isEditing = false;
  //     this.cargarLibros();
  //   });
  // }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }


  //funcion borrar

  borrarFila(cod: number) {
    if (confirm("¿Realmente quiere borrar los datos?")) {
     // this.datos.splice(cod, 1);
      //this.tabla3.renderRows();
    }
  }

}

