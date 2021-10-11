import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

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
        switchMap((params)=>this.paisService.getPaisAlpha(params.id))
      )
      .subscribe(resp =>{
        console.log(resp);
      })
  
  }

}
