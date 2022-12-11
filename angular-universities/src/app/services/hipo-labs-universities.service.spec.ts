import { TestBed } from '@angular/core/testing';

import { HipoLabsUniversitiesService } from './hipo-labs-universities.service';

describe('HipoLabsUniversitiesService', () => {
  let service: HipoLabsUniversitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HipoLabsUniversitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
