import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  public ObtenerUsuarios(): Observable<Usuario[]> {
    return this.httpClient
      .get<Usuario[]>('http://localhost:8080/ver/usuarios', {
        responseType: 'json',
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public ObtenerUsuarioId(id: number): Observable<Usuario[]> {
    return this.httpClient
      .get<Usuario[]>('http://localhost:8080/ver/usuarios/{id}', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public AgregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient
      .post<Usuario>('http://localhost:8080/agregarUsers', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  onCrearRegistro(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>('http://localhost:8080/agregarUsers', usuario);
  }

  public EditarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient
      .put<Usuario>('http://localhost:8080/ver/editarUser', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

 public EliminarUsuario(id: Number) {
    this.httpClient.delete('http://localhost:8080/delete/' + id).subscribe(data => {
      console.log(data);
    });

  }
}

export class Usuario
{
  name:string="";
  last_name:string="";
  domicilio:string="";
  tel:string="";


}

