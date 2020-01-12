import { TestBed } from '@angular/core/testing';

import { StateStockService } from '../state-management/state-stock-add.service';

describe('StateStockService', () => {
  let service: StateStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
