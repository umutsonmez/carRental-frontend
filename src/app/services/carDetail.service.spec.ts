import { TestBed } from '@angular/core/testing';

import { CarDetailService } from './carDetail.service';

describe('CarDetailService', () => {
  let service: CarDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
