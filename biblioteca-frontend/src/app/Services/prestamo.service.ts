import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url="http://localhost:8080/agregarLendings";

  constructor(private http:HttpClient) { }

  onCrearPrestamo(lending:Lending):Observable<Lending>{
    return this.http.post<Lending>(this.url, lending);
  }

  public ObtenerReportes(): Observable<Lending[]> {
    return this.http
      .get<Lending[]>('http://localhost:8080/ver/lendings', {
        responseType: 'json',
      })
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
  

 /* ObtenerUsuario(mail:string |null )
  {
    return this.http.get<any>(this.url+"?mail="+mail);
  }*/

}


export class Lending
{
  user_id: string="";
  book_id:string="";
  date_out:string="";
  dia_devolucion:string="";
  


}
