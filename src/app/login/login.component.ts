import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from 'app/shared/services/api-services/person/person.service';
import { NotificationService } from 'app/shared/services/helper-services/notificaiton/notification.service';
import { Router } from '@angular/router';
import { CustomeValidatorsService } from 'app/shared/services/helper-services/custom-validators/custome-validators.service';
import { GlobalDataService } from 'app/shared/services/helper-services/global-data/global-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  private code: string = "";
  private password: string = "";

  constructor(
    private _personService: PersonService,
    private _notificationService: NotificationService,
    private router: Router,
    private _customValidators: CustomeValidatorsService,
    private _globalDataService: GlobalDataService    
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      code: this._customValidators.alphaNumeric(),
      password: new FormControl("", [Validators.required, Validators.min(8)]),
    });
  }


  submit() {
    this._personService.authenticate(this.code, this.password)
      .then(result => {
        let welcomeMessage = 'Welcome! ' + result.data.first_name + ' ' + result.data.last_name;

        this._notificationService.snackMessage(welcomeMessage);

        this._globalDataService.userInfo(result.data);

        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        this._notificationService.snackMessage(error.data);
      })
  }
}
