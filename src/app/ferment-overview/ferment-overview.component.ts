import { Component, OnInit } from '@angular/core';
import { Ferment } from '../ferment';
import { FermentService } from '../ferment.service';

@Component({
  selector: 'app-ferment-overview',
  templateUrl: './ferment-overview.component.html',
  styleUrls: ['./ferment-overview.component.css']
})
export class FermentOverviewComponent implements OnInit {

  ferments: Ferment[] = [];
  selectedFerment: Ferment;

  constructor(private fermentService: FermentService) { }

  getFerments(): void {
    this.fermentService.getAll()
      .subscribe(ferments => this.ferments = ferments);
  }

  ngOnInit() {
    this.getFerments();
  }

  onSelect(ferment: Ferment): void {
    this.selectedFerment = ferment;
  }
}
