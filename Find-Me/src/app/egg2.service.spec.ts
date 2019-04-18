import { TestBed } from '@angular/core/testing';

import { Egg2Service } from './egg2.service';

describe('Egg2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Egg2Service = TestBed.get(Egg2Service);
    expect(service).toBeTruthy();
  });
});
