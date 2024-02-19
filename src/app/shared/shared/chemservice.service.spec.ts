import { TestBed } from '@angular/core/testing';

import { ChemserviceService } from './chemservice.service';

describe('ChemserviceService', () => {
  let service: ChemserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
