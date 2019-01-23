import { TestBed } from '@angular/core/testing';

import { FavouriteServiceService } from './favourite-service.service';

describe('FavouriteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteServiceService = TestBed.get(FavouriteServiceService);
    expect(service).toBeTruthy();
  });
});
