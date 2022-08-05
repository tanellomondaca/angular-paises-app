import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
   selector: 'app-por-capital',
   templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
   termino: string = '';
   hayError: boolean = false;
   paises: Country[] = [];

   constructor(private capitalService: PaisService) {}

   buscar(arg: string) {
      this.hayError = false;
      this.termino = arg;
      console.log(this.termino);

      this.capitalService.buscarCapital(this.termino).subscribe({
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
}
