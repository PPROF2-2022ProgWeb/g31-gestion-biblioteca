import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseModel } from './response.model';
import { Usuario } from '../component/usuarios/usuarios.component';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  public ObtenerUsuarios(): Observable<ResponseModel<Usuario[]>> {
    return this.httpClient
      .get<ResponseModel<Usuario[]>>('http://localhost:8080/ver/usuarios', {
        responseType: 'json',
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
