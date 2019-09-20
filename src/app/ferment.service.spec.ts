import { TestBed } from '@angular/core/testing';

import { FermentService } from './ferment.service';

describe('FermentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FermentService = TestBed.get(FermentService);
    expect(service).toBeTruthy();
  });
});
