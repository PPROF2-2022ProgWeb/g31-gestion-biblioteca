import { Libro } from './../component/libros/libros.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  constructor(private httpClient: HttpClient) {}

  public ObtenerUsuarios(): Observable<Libro[]> {
    return this.httpClient
      .get<Libro[]>('http://localhost:8080/ver/usuarios', {
        responseType: 'json',
      })
      .pipe(
        map((data) => {
          // console.log('Respuesta getGiros: ' + JSON.stringify(data));
          return data;
        })
      );
  }
}
