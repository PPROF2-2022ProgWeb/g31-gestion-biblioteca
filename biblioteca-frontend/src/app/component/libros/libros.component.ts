import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    //funcion para cargar los datos de la variable datos en la tabla
      this.dataSource = new MatTableDataSource<Libro>(this.datos);
      this.dataSource.paginator = this.paginator;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }


    //nombrar columnas
    columnas: string[] = [
      'LibroID' , 
      'Nombre',
      'Autor',
      'Categoria',
      'Idioma',
      'Disponibles',
      'Ejemplares',
      'Edicion',
    ];

    //datos que se visualizaran
    datos: Libro[] =
      [new Libro(1,1,'Juan y sus amigos','Juan Ortega','20/22/1944','unica','español','50','Ciencia Ficcion','car','9'),
      new Libro(2,2,'a','b','c','d','e','f','g','h','j'),
      new Libro(3,3,'a','b','c','d','e','f','g','h','j'),
      new Libro(4,4,'a','b','c','d','e','f','g','h','j'),
      new Libro(5,5,'a','b','c','d','e','f','g','h','j'),
      new Libro(6,6,'a','b','c','d','e','f','g','h','j'),]
    dataSource: any;
  
    Libroselect: Libro = new Libro(1,1,'a','b','c','d','e','f','g','h','j');
  
    @ViewChild(MatTable) tabla3!: MatTable<Libro>;
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

}


//constructor de Libros
export class Libro {
  constructor(
    public id: number,
    public disponibilidad : number,

    public nombre: string,
    public autor: string,
    public date: string,
    public edicion:string,
    public idioma:string,
    public pages:string,
    public categoria:string,
    public descripcion:string,
    public ejemplares:string,
    
    ) {
  }
}
