import { TestBed } from '@angular/core/testing';

import { EmpArrayService } from './emp-array.service';

describe('EmpArrayService', () => {
  let service: EmpArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
