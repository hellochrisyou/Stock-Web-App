import { TestBed } from '@angular/core/testing';

import { StateIpoService } from '../state-management/state-ipo-add.service';

describe('StateIpoService', () => {
  let service: StateIpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateIpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
