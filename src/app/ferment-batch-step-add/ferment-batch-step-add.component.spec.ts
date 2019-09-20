import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentBatchStepAddComponent } from './ferment-batch-step-add.component';

describe('FermentBatchStepAddComponent', () => {
  let component: FermentBatchStepAddComponent;
  let fixture: ComponentFixture<FermentBatchStepAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentBatchStepAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentBatchStepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
