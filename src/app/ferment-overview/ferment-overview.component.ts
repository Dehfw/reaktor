import { Component, OnInit } from '@angular/core';
import { FERMENTS } from '../mock-ferments';import { Ferment } from '../ferment';

@Component({
  selector: 'app-ferment-overview',
  templateUrl: './ferment-overview.component.html',
  styleUrls: ['./ferment-overview.component.css']
})
export class FermentOverviewComponent implements OnInit {
  
  selectedHero: Ferment;
  ferments = FERMENTS;

  constructor() {}

  ngOnInit() {}

  
  onSelect(ferment: Ferment): void {
    this.selectedHero = ferment;
  }
}
