import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FermentService } from '../ferment.service';
import { FermentStep } from '../ferment';

@Component({
  selector: 'app-ferment-batch',
  templateUrl: './ferment-batch.component.html',
  styleUrls: ['./ferment-batch.component.css']
})
export class FermentBatchComponent implements OnInit {
  
  steps : FermentStep[] = [];
  
  constructor(
    private fermentService: FermentService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  /*
  getFerments(): void {
    this.fermentService.getFermentsSteps()
      .subscribe(steps => this.steps = steps);
  }
  */

  // extract which ferment is calling the batch comp
  getFerment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.fermentService.getFermentsSteps(id)
      .subscribe(steps => this.steps = steps);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getFerment();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
  }

}
