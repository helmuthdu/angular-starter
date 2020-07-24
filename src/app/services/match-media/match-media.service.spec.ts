import { TestBed } from '@angular/core/testing';

import { MatchMediaService } from './match-media.service';

describe('MatchMediaService', () => {
  let service: MatchMediaService;

  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => {
    service = TestBed.inject(MatchMediaService);
    expect(service).toBeTruthy();
  });
});
