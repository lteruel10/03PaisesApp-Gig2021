import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Country[];//ts confia en mi !: puede ser null

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.
    // subscribe(params =>{
    //   console.log(params)
    //       this.paisService.getPaisAlpha(params.id)
    //   .subscribe(pais=>{
    //     console.log(pais)
    //   })
    // })
//desestructurado
    // this.activatedRoute.params.
    // subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.getPaisAlpha(id.toString())
    //   .subscribe(pais=>{
    //     console.log(pais)
    //   })
    // })
//USANDO RJXS
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisAlpha(id)),tap(console.log)
      )
      .subscribe(pais =>{
        this.pais=pais;
        console.log(pais[0].name.common);
      })
  
  }

}
