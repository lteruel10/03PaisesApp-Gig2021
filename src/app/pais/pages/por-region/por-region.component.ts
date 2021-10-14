import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[]=['Africa','Americas','Asia','Europe','Oceania'];
  constructor() { }

  ngOnInit(): void {
  }

}
