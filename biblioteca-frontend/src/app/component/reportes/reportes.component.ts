import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Lending, PrestamoService } from 'src/app/Services/prestamo.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  //recarga de página

  dataSource: MatTableDataSource<Lending> = new MatTableDataSource<Lending>();
  
  reloadCurrentPage() {
    window.location.reload();
   }

  constructor(private lendingService: PrestamoService) {}
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarReportes();
    console.log( this.cargarReportes())
  }
  //metodo para filtrar
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  cargarReportes() {
    this.lendingService.ObtenerReportes().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  //fin cosas angular

  //nombrar columnas
  columnas: string[] = ['Usuario','Libro', 'Fecha de pedido', 'Fecha de devolucion' ,];
  

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




