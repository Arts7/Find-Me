import { TestBed } from '@angular/core/testing';

import { Egg4Service } from './egg4.service';

describe('Egg4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Egg4Service = TestBed.get(Egg4Service);
    expect(service).toBeTruthy();
  });
});
