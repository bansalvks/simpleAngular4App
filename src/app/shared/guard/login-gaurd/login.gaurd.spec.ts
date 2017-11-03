/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginGaurd } from './login.gaurd';

describe('LoginGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGaurd]
    });
  });

  it('should ...', inject([LoginGaurd], (service: LoginGaurd) => {
    expect(service).toBeTruthy();
  }));
});
