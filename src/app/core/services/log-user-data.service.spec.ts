import { TestBed } from '@angular/core/testing';

import { LogUserDataService } from './log-user-data.service';

describe('LogUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogUserDataService = TestBed.get(LogUserDataService);
    expect(service).toBeTruthy();
  });
});
