import { TestBed } from '@angular/core/testing';

import { CcyService } from './ccy.service';

describe('CcyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcyService = TestBed.get(CcyService);
    expect(service).toBeTruthy();
  });
});
