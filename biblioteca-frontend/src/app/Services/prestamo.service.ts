import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url="https://localhost:8080/";

  constructor(private http:HttpClient) { }

  onCrearPrestamo(prestamo:Lending):Observable<Lending>{
    return this.http.post<Lending>(this.url, prestamo);
  }

 /* ObtenerUsuario(mail:string |null )
  {
    return this.http.get<any>(this.url+"?mail="+mail);
  }*/

}


export class Lending
{
  username: string="";
  nombre:string="";
  apellido:string="";
  email:string="";
  contrasena:string="";
  telefono:string="";
  fecha_nacimiento:string="";


  id_usuario:number=0;

}
