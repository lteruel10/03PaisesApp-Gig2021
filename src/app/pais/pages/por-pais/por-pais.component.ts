import { Component, OnInit,Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})


export class PorPaisComponent  {

  termino:string = '';
  hayError:boolean = false;
  paises:Country[]=[];
  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino)
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
