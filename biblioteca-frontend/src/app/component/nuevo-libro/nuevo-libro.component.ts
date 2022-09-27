import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data: { inputId: string; inputIdioma: string; inputTitulo: string; inputPaginas: string; inputPublicacion: string; inputDescripcion: string; inputAutor: string; inputStock: string; inputDisponibles: string; inputCategoria: string; inputEjemplares: string; }) {
    alert("Id : " + data.inputId + "Idioma : " + data.inputIdioma + "Titulo : " + data.inputTitulo + "Paginas : " + data.inputPaginas + "Publicacion : " + data.inputPublicacion + "Descripcion : " + data.inputDescripcion + "Autor : " + data.inputAutor + "Stock : " + data.inputStock + "Disponibles : " + data.inputDisponibles + "Categoria : " + data.inputCategoria + "Ejemplares : " + data.inputEjemplares);
 }

}
