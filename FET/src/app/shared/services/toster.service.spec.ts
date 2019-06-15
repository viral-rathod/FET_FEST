import { TestBed } from '@angular/core/testing';

import { TosterService } from './toster.service';

describe('TosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TosterService = TestBed.get(TosterService);
    expect(service).toBeTruthy();
  });
});
