import { IRequest } from './../../../interfaces/I-request';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';

// for service
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

// models
import { Person } from 'app/shared/models/person';
import { RequestFactoryService, REQUEST_TYPES } from 'app/shared/factories/request-factory/request-factory.service';

@Injectable()
export class PersonService {
  private _requestService: IRequest;

  constructor(
    _requestFactoryService: RequestFactoryService
  ) {
    this._requestService = _requestFactoryService.getStorage(REQUEST_TYPES.HTTP);
  }

  private handleError(error: any): Promise<any> {
    error = error.json();
    console.error('An error occurred', error);
    return Promise.reject(error);
    // return Promise.reject(error.message || error);
  }

  public signup(record): Promise<Person> {
    let url = environment.api + 'person/public/signup';

    return this._requestService.post(url, record)  as Promise<Person>;;
  }

  public authenticate(code: string, password: string): Promise<Person> {
    let url = environment.api + 'auth/signin';

    let postData = {
      code: code,
      password: password
    }

    return this._requestService.post(url, postData) as Promise<Person>;
  }
}
