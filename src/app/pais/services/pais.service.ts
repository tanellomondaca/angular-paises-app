import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
   providedIn: 'root',
})
export class PaisService {
   // Url base para todos los inputs
   private apiUrl: string = 'https://restcountries.com/v3.1';

   constructor(private http: HttpClient) {}

   buscarPais( termino: string): Observable<Country[]>{
      const url = `${this.apiUrl}/name/${termino}`
      console.log('Buscando...');
      return this.http.get<Country[]>( url );
   }

   buscarCapital( termino: string): Observable<Country[]>{
      const url = `${this.apiUrl}/capital/${termino}`
      console.log('Buscando...');
      return this.http.get<Country[]>( url );
   }

   paisPorId( id: string){
      const url = `${this.apiUrl}/alpha/${id}`
      console.log('Buscando...');
      return this.http.get<Country>( url );
   }

   buscarRegion(region: string): Observable<Country[]>{
      const url = `${this.apiUrl}/region/${region}`
      console.log('Buscando...');
      return this.http.get<Country[]>( url );
   }
}
