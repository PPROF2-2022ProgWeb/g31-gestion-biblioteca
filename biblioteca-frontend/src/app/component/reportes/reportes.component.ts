import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  //recarga de página
  
  reloadCurrentPage() {
    window.location.reload();
   }

  ngOnInit() {

    
    
    //funcion para cargar los datos de la variable datos en la tabla
      this.dataSource = new MatTableDataSource<Reporte>(this.datos);
      this.dataSource.paginator = this.paginator;
  }
  //metodo para filtrar
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  //fin cosas angular

  //nombrar columnas
  columnas: string[] = ['Usuario','Libro', 'Fecha de pedido', 'Fecha de devolucion' ,];
  //datos que se visualizaran
  datos: Reporte[] =
    [new Reporte('Juan', 'El sapo Pepe', new Date(), new Date()),
    new Reporte('Pepe', 'Las Aventuras de Lucas', new Date(), new Date()),
    new Reporte('Carlos', 'El despertar', new Date(), new Date()),
    new Reporte('Juan', 'Anochecer', new Date(), new Date()),
    new Reporte('Marcos', 'Atardecer', new Date(), new Date()),
    new Reporte('Gertrudis', 'Cobra', new Date(), new Date()),]
  dataSource: any;

  reporteselect: Reporte = new Reporte('', '', new Date(), new Date());

  @ViewChild(MatTable) tabla1!: MatTable<Reporte>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


}

//constructor de Reportes
export class Reporte {
  constructor(
    public Usuario: string,
    public Libro: string,
    public fecha_pedido: Date,
    public fecha_devolucion: Date) {
  }
}




