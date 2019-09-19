import { Component, OnInit } from '@angular/core';
import { FERMENTSSTEPS } from '../mock-ferments';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ferment-batch',
  templateUrl: './ferment-batch.component.html',
  styleUrls: ['./ferment-batch.component.css']
})
export class FermentBatchComponent implements OnInit {
  
  steps = FERMENTSSTEPS;
  
  constructor() {}

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
  }

}
