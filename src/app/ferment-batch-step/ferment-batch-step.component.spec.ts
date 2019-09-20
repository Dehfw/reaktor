import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentBatchStepComponent } from './ferment-batch-step.component';

describe('FermentBatchStepComponent', () => {
  let component: FermentBatchStepComponent;
  let fixture: ComponentFixture<FermentBatchStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentBatchStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentBatchStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
