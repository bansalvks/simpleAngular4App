/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalFunctionService } from './global-function.service';

describe('GlobalFunctionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalFunctionService]
    });
  });

  it('should ...', inject([GlobalFunctionService], (service: GlobalFunctionService) => {
    expect(service).toBeTruthy();
  }));
});
