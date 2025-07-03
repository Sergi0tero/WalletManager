import { TestBed } from '@angular/core/testing';

import { IncomesandoutcomesService } from './incomesandoutcomes.service';

describe('IncomesandoutcomesService', () => {
  let service: IncomesandoutcomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomesandoutcomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
