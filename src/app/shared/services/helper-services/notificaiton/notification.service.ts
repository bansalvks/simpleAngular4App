import { Injectable, Output, EventEmitter } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

@Output()
reLoginRequested: EventEmitter<any> = new EventEmitter<any>();

  public snackMessage(message: string, actionTitle: string = "Close", actionCallback: () => void = undefined, duration: number = 5000) {

    let snackBarRef = this.snackBar.open(message, actionTitle, {
      duration: duration,
    });

    if (!actionCallback) {
      actionCallback = () => {
        snackBarRef.dismiss();
      };
    }

    snackBarRef.onAction().subscribe(actionCallback);
  }
}
