import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {

  @Output () onEnter:EventEmitter<string> = new EventEmitter();//los eventos creados se antepone on onEvento
  constructor() { }
  termino:string='';

   buscar(){
      this.onEnter.emit(this.termino);
   }

}
