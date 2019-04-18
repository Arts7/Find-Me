import { TestBed } from '@angular/core/testing';

import { Egg1Service } from './egg1.service';

describe('Egg1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Egg1Service = TestBed.get(Egg1Service);
    expect(service).toBeTruthy();
  });
});
