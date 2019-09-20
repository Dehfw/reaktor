import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'app-ferment-batch-step-add',
  templateUrl: './ferment-batch-step-add.component.html',
  styleUrls: ['./ferment-batch-step-add.component.css']
})

export class FermentBatchStepAddComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
