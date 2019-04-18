import { TestBed } from '@angular/core/testing';

import { HellService } from './hell.service';

describe('HellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HellService = TestBed.get(HellService);
    expect(service).toBeTruthy();
  });
});
