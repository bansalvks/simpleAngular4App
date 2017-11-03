/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorgeFactoryService } from './storge-factory.service';

describe('StorgeFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorgeFactoryService]
    });
  });

  it('should ...', inject([StorgeFactoryService], (service: StorgeFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
