import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {


  ngOnInit(): void {
  }
  termino:string = '';
  hayError:boolean = false;
  paises:Country[]=[];
  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe(paises=>{
      this.paises=paises;//tengo que llenar el arreglo con los datos obtenidos
    },(err=>{
      this.hayError=true;
      this.paises=[];
      // console.log('error');       console.info(err);
    }));
  }//buscar

  sugerencias(termino:string){
    this.hayError=false;
      }//sugerencias

}
