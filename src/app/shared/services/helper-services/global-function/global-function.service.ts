import { PersonService } from 'app/shared/services/api-services/person/person.service';
import { Injectable } from '@angular/core';
import { InputModalComponent } from 'app/shared/components/input-modal/input-modal.component';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'app/shared/services/helper-services/notificaiton/notification.service';

@Injectable()
export class GlobalFunctionService {

  constructor(
    public dialog: MatDialog,
    private _personService: PersonService,
    private _notificationService: NotificationService
  ) {
    this._notificationService.reLoginRequested.subscribe((userData) => {
      console.log(userData)
      this.relogin();
    });
   }

  relogin(): void {
    let dialogRef = this.dialog.open(InputModalComponent, {
      width: '250px',
      data: { title: "Please provide your password to re-login." }
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log('The dialog was closed');
      let password = result;
    });
  }

}
