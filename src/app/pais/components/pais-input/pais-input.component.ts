import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Input () placeholder:string='';

  @Output () onEnter:EventEmitter<string> = new EventEmitter();//los eventos creados se antepone on onEvento
  @Output () onDebounce:EventEmitter<string> = new EventEmitter();//los eventos creados

//crear un subject es un boservable
//la idea del debouncer es que se emita cuando se deja de teclear
  debouncer:Subject<string> = new Subject();
   constructor() { }
  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)///no hagas el subscribe hasta dentro de 300s
      )
      .subscribe(valor=>{
        console.log('debouncer', valor);
        this.onDebounce.emit(valor);
    })
  }
  termino:string='';

   buscar(){
      this.onEnter.emit(this.termino);
   }

  //SOLO PARA VER QUE SUCEDE AL PRESIONAR UNA TECLA
  //  teclaPresionada(event:any){
  //    const valor=event.target.value;
  //    console.log(valor);
  //    console.log(this.termino);
  //  }
  //                (input)="teclaPresionada($event)" asi deberia estr en el HTML

   teclaPresionada(){
     this.debouncer.next(this.termino);
  }

}
