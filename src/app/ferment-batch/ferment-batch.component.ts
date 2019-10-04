import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FermentService } from '../ferment.service';
import {Ferment, FermentStep} from '../ferment';

@Component({
  selector: 'app-ferment-batch',
  templateUrl: './ferment-batch.component.html',
  styleUrls: ['./ferment-batch.component.css']
})
export class FermentBatchComponent implements OnInit {
  
  private ferment : Ferment;
  
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
  getOne(): void {
    const id = +this.route.snapshot.paramMap.get('id') || 0;
    console.log(id);
    this.fermentService.getOne(id)
      .subscribe(ferment => this.ferment = ferment);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getOne();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ferment.steps, event.previousIndex, event.currentIndex);
    this.fermentService.saveFerment(this.ferment)
  }

}
