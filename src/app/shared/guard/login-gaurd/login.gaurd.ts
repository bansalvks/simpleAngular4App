import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { GlobalDataService } from 'app/shared/services/helper-services/global-data/global-data.service';

@Injectable()
export class LoginGaurd implements CanActivate {
  constructor(
    private router: Router,
    private _globalDataService: GlobalDataService
  ) { }

  canActivate() {
    if (!this._globalDataService.userInfo()) {
      return true;
    }

    this.router.navigate(['/dashboard']);
    return false;
  }
}
