/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestInterceptorService } from './request-interceptor.service';

describe('RequestInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestInterceptorService]
    });
  });

  it('should ...', inject([RequestInterceptorService], (service: RequestInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
