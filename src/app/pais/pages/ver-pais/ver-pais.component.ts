import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
   selector: 'app-ver-pais',
   templateUrl: './ver-pais.component.html',
   styles: [],
})
export class VerPaisComponent implements OnInit {

   constructor(
      private paisService: PaisService,
      private activatedRoute: ActivatedRoute,
      ) {}

   ngOnInit(): void {
      this.activatedRoute.params
         .subscribe({
            next: ({id}) => {
               console.log(id);
               this.paisService.paisPorId(id)
                  .subscribe({
                     next: pais => console.log(pais),
                     error: err => console.log(err)

                  })
               },
            error: err => console.log(err)
         })
   }
}
