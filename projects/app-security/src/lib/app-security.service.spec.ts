import { TestBed } from '@angular/core/testing';

import { AppSecurityService } from './app-security.service';

describe('AppSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSecurityService = TestBed.get(AppSecurityService);
    expect(service).toBeTruthy();
  });
});
