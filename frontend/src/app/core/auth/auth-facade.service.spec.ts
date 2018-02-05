import {inject, TestBed} from '@angular/core/testing';

import {AuthenticationFacadeService} from './auth-facade.service';

describe('AuthFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationFacadeService]
    });
  });

  it('should be created', inject([AuthenticationFacadeService], (service: AuthenticationFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
