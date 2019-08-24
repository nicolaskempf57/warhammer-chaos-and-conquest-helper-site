import { TestBed } from '@angular/core/testing';

import { DirectusService } from './directus.service';

describe('DirectusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectusService = TestBed.get(DirectusService);
    expect(service).toBeTruthy();
  });
});
