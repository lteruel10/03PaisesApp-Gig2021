import {NgModule} from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { SharedModule } from './shared/shared.module';
import { PorCapitalPaisComponent } from './pais/pages/por-capital-pais/por-capital-pais.component';

export const routes: Routes = [
    {
        path: '',
        component:PorPaisComponent,
        pathMatch:'full'
    },
    {
        path: 'region',
        component:PorRegionComponent
    },
    {
        path: 'capital',
        component:PorCapitalComponent
    },
    {//el id es el codigo del pais
        path: 'pais/:id',
        component:VerPaisComponent
    },
    {
        path: 'capitalpais',
        component:PorCapitalPaisComponent
    },
    {//la excepcion
        path: '**',
        redirectTo:''
    }//redireccionara a la ruta principal
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule

    ]

})
export class AppRoutingModule {
    
}
