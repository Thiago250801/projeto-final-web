import { TestBed } from '@angular/core/testing';

import { SoapService } from './soap.service';

describe('SoapServiceService', () => {
  let service: SoapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
