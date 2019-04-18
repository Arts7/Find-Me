import { TestBed } from '@angular/core/testing';

import { Egg6Service } from './egg6.service';

describe('Egg6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Egg6Service = TestBed.get(Egg6Service);
    expect(service).toBeTruthy();
  });
});
