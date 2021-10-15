import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right:5px
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[]=['africa','americas','asia','europe','oceania'];
  regionActiva:string='';
  paises:Country[]=[];
  region:string='';
  hayError:boolean = false;


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    //evitar el refresco de la pantalla cuando toco la misma region se
    if(region===this.regionActiva){return;}//entonces no hace nada jhejejej

    this.regionActiva=region;
    this.paises=[];
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe(paises=>{
      this.paises=paises;//tengo que llenar el arreglo con los datos obtenidos
      console.log(paises);
    },(err=>{
      this.hayError=true;
      this.paises=[];
      // console.log('error');       console.info(err);
    }));
    // console.log(region);
    //TODO: hacer el llamado al servicio
  }
  getClaseCSS(region:string){
    return (region===this.regionActiva)
            ?'btn btn-primary'
            :'btn btn-outline-primary'
  }

  buscarRegion(region:string){
    this.region=region;
    this.paisService.buscarRegion(this.region)
    .subscribe(paises=>{
      this.paises=paises;//tengo que llenar el arreglo con los datos obtenidos
      console.log(paises);

    },(err=>{
      this.hayError=true;
      this.paises=[];
      // console.log('error');       console.info(err);
    }));
  }//buscar

}
