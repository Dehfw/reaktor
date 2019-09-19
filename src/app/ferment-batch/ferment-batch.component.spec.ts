import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentBatchComponent } from './ferment-batch.component';

describe('FermentBatchComponent', () => {
  let component: FermentBatchComponent;
  let fixture: ComponentFixture<FermentBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
