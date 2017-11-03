/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestFactoryService } from './request-factory.service';

describe('RequestFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestFactoryService]
    });
  });

  it('should ...', inject([RequestFactoryService], (service: RequestFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
