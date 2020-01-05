import { TestBed } from '@angular/core/testing';

import { SearchCacheIpoService } from '../cache/search-cache-ipo.service';

describe('SearchStateIpoService', () => {
  let service: SearchCacheIpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCacheIpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
