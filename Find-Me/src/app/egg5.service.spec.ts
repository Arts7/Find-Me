import { TestBed } from '@angular/core/testing';

import { Egg5Service } from './egg5.service';

describe('Egg5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Egg5Service = TestBed.get(Egg5Service);
    expect(service).toBeTruthy();
  });
});
