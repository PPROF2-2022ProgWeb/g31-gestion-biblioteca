import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../component/usuarios/usuarios.component';

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
}
