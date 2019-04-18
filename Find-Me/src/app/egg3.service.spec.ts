import { TestBed } from '@angular/core/testing';

import { Egg3Service } from './egg3.service';

describe('Egg3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Egg3Service = TestBed.get(Egg3Service);
    expect(service).toBeTruthy();
  });
});
