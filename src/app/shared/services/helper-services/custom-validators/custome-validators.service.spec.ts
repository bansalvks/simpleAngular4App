/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomeValidatorsService } from './custome-validators.service';

describe('CustomeValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomeValidatorsService]
    });
  });

  it('should ...', inject([CustomeValidatorsService], (service: CustomeValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
