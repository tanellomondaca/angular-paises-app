import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
   button {
      margin-right: 5px;
   }
  `
  ]
})
export class PorRegionComponent {

   regiones: string[] = ['americas', 'africa', 'asia', 'europe', 'oceania'];
   regionActiva: string = '';
   paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  obtenerClaseCss(region: string){
   return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

   activarRegion(region: string){
      this.regionActiva = region;
   }

   buscar(arg: string) {
      this.paisService.buscarRegion(arg).subscribe({
         next: (paises) => {
            console.log(paises);
            this.paises = paises;
         },
         error: (e) => {
            this.paises = [];
            console.log(e);
         },
      });
   }


}
