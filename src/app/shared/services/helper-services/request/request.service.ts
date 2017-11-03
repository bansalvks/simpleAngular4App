import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { IRequest } from 'app/shared/interfaces/i-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService implements IRequest {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private handleError(error: any): Promise<any> {
    error = error.json();
    console.error('An error occurred', error);
    return Promise.reject(error);
    // return Promise.reject(error.message || error);
  }

  constructor(
    public snackBar: MatSnackBar,
    private _http: HttpClient
  ) { }

  public get(url: string): Promise<Object> {
    return this._http.get<Object>(url, { headers: this.headers })
      .toPromise()
      .then(res => res)
      .catch(this.handleError)
  }

  public post(url: string, data: Object): Promise<Object> {
    return this._http.post(url, data, { headers: this.headers })
      .toPromise()
      .then(res => res)
      .catch(this.handleError)
  }

}
