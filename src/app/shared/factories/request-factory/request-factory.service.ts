import { Injectable } from '@angular/core';
import { IRequest } from 'app/shared/interfaces/i-request';
import { RequestService } from 'app/shared/services/helper-services/request/request.service';

@Injectable()
export class RequestFactoryService {

  constructor(private _requestService: RequestService) { }

  getStorage(requestType: REQUEST_TYPES): IRequest {
    switch (requestType) {
      case REQUEST_TYPES.HTTP:
        return this._requestService;
      default:
        return null;
    }
  }
}

export enum REQUEST_TYPES {
  HTTP
}