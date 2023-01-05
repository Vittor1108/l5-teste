import { TestBed } from '@angular/core/testing';

import { SearchAlbumsService } from './search-albums.service';

describe('SearchAlbumsService', () => {
  let service: SearchAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
