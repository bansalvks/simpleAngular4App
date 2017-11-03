/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponseInterceptorService } from './response-interceptor.service';

describe('ResponseInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseInterceptorService]
    });
  });

  it('should ...', inject([ResponseInterceptorService], (service: ResponseInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
