import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
   selector: 'app-por-pais',
   templateUrl: './por-pais.component.html',
   styles: [
      `
         li {
            cursor: pointer;
         }
      `,
   ],
})
export class PorPaisComponent {
   termino: string = '';
   hayError: boolean = false;
   paises: Country[] = [];
   paisesSugeridos: Country[] = [];

   mostrarSugerencias = false;

   constructor(private paisService: PaisService) {}

   buscar(arg: string) {
      this.mostrarSugerencias = false;
      this.hayError = false;
      this.termino = arg;
      console.log(this.termino);

      this.paisService.buscarPais(this.termino).subscribe({
         next: (paises) => {
            console.log(paises);
            this.paises = paises;
         },
         error: (e) => {
            this.hayError = true;
            this.paises = [];
            console.log(e);
         },
      });
   }

   sugerencias(termino: string) {
      this.mostrarSugerencias = true;
      this.hayError = false;
      this.termino = termino;
      this.paisesSugeridos = [];
      // Buscar países
      this.paisService.buscarPais(termino).subscribe({
         next: (paises) => {
            this.paisesSugeridos = paises.splice(0, 3);
         }, // Mostrar 3; }
         error: (err) => {
            this.paisesSugeridos = [];
            console.log(err);
         },
      });
   }

   buscarSugerido(termino: string) {
      this.buscar(termino);
   }
}
