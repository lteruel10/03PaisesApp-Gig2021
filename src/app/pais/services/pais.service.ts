import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string='https://restcountries.com/v3.1';
  private apiUrlAlpha: string='https://restcountries.com/v3.1/alpha';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const urlP=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(urlP) ;
  }
  
  buscarCapital(termino:string):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarGlobal(termino:string)  :Observable<Country[]>{
    const urlC=`${this.apiUrl}/capital/${termino}`;
    const urlP=`${this.apiUrl}/name/${termino}`;

    let obj_unidos = Object.assign(this.buscarPais(termino), this.buscarCapital(termino))
     console.log(obj_unidos);
    return obj_unidos;
  }

  getPaisAlpha(id:string)  :Observable<Country>{
    const url=`${this.apiUrlAlpha}/${id}`;
    console.log(url);
    return this.http.get<Country>(url);

  }



}
