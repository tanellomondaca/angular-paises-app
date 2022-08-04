import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";

import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
   {
      path: '', // Ruta del home
      component: PorPaisComponent,
      pathMatch: 'full'
   },
   {
      path: 'region',
      component: PorRegionComponent
   },
   {
      path: 'capital',
      component: PorCapitalComponent
   },
   {
      path: 'pais/:id',
      component: VerPaisComponent
   },
   {
      path:'**', // En caso de acceder a una ruta no definida
      redirectTo: '' // al estar vacio le decimos que redireccione al home page
   }
]

@NgModule({
   imports:[
      RouterModule.forRoot( routes )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule {

}


