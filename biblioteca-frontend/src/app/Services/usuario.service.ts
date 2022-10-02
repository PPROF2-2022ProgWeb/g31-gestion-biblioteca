import { Usuario } from './../component/usuarios/usuarios.component';
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

  public EliminarUsuario(id: Number): Observable<Usuario> {
    return this.httpClient
      .delete<Usuario>('http://localhost:8080/ver/deletebook/{id}', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
