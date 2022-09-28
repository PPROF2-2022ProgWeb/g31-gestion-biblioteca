import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-usuario', 
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
  
})
export class NuevoUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data: { inputNombre: string; inputDireccion: string; inputApellido: string; inputTelefono: string; inputApellido1: string }) {
    alert("Nombre : " + data.inputNombre + "Direccion : " +data.inputDireccion + "Apellido 1 : " + data.inputApellido + "Telefono : " +data.inputTelefono + "Apellido 2 : " +data.inputApellido1);
 }

  

}
