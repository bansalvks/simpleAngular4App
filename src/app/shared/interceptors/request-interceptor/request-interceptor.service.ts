import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { GlobalDataService } from 'app/shared/services/helper-services/global-data/global-data.service';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor(
    private _globalDataService: GlobalDataService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userInfo = this._globalDataService.userInfo() as any;
    let token = userInfo ? userInfo.token : null;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request);
  }
}
