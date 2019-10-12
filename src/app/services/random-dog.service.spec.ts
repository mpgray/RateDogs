import { TestBed } from '@angular/core/testing';

import { RandomDogService } from './random-dog.service';

describe('RandomDogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomDogService = TestBed.get(RandomDogService);
    expect(service).toBeTruthy();
  });
});
