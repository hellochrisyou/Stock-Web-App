import { TestBed } from '@angular/core/testing';

import { StateIpoListService } from '../state-management/state-ipo-list.service';

describe('StateIpoListService', () => {
  let service: StateIpoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateIpoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
