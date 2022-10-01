import { Libro } from './../component/libros/libros.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  constructor(private httpClient: HttpClient) {}

  public ObtenerLibros(): Observable<Libro[]> {
    return this.httpClient
      .get<Libro[]>('http://localhost:8080/ver/libros', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public ObtenerLibroId(id: number): Observable<Libro[]> {
    return this.httpClient
      .get<Libro[]>('http://localhost:8080/ver/libros/{id}', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public AgregarLibro(libro: Libro): Observable<Libro> {
    return this.httpClient
      .post<Libro>('http://localhost:8080/ver/agregarBooks', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public EditarLibro(libro: Libro): Observable<Libro> {
    return this.httpClient
      .put<Libro>('http://localhost:8080/ver/editarBook', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public EliminarLibro(id: Number): Observable<Libro> {
    return this.httpClient
      .delete<Libro>('http://localhost:8080/ver/deletebook/{id}', {
        responseType: 'json'
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
