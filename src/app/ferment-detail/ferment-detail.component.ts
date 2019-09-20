import { Component, OnInit, Input } from '@angular/core';
import { Ferment } from '../ferment';

@Component({
  selector: 'app-ferment-detail',
  templateUrl: './ferment-detail.component.html',
  styleUrls: ['./ferment-detail.component.css']
})
export class FermentDetailComponent implements OnInit {
  @Input() ferment: Ferment;

  constructor() { }

  ngOnInit() {
  }

}
