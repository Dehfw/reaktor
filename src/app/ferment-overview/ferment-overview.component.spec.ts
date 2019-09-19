import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentOverviewComponent } from './ferment-overview.component';

describe('FermentOverviewComponent', () => {
  let component: FermentOverviewComponent;
  let fixture: ComponentFixture<FermentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
