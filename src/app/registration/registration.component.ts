import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { PersonService } from 'app/shared/services/api-services/person/person.service';
import { NotificationService } from 'app/shared/services/helper-services/notificaiton/notification.service';

import { CustomeValidatorsService } from 'app/shared/services/helper-services/custom-validators/custome-validators.service';
import { PERSON_TYPES } from 'app/shared/enums/enums';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private defaultRecordValue() {
    return {
      email: "",
      password: "",
      cpassword: "",
      first_name: "",
      last_name: "",
      dob: "",
      gender: "",
      contact_number: "",
      type: PERSON_TYPES.STUDENT
    };
  }

  private informationBar = {
    title: "",
    message: ""
  };


  constructor(
    private _notificationService: NotificationService,
    private _personService: PersonService,
    private _customValidators: CustomeValidatorsService
  ) { }

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: this._customValidators.alphaNumeric(),
      lastName: this._customValidators.alphaNumeric(),
      email: this._customValidators.email(),
      password: new FormControl("", [Validators.required, Validators.min(8)]),
      dob: new FormControl("", [Validators.required]),
      contactNumber: this._customValidators.numeric(true, 8),
      cpassword: new FormControl("", [Validators.required, (control: FormControl) => {
        if (!control || !control.parent) {
          return null;
        }
        if (control.value !== control.parent.get("password").value) {
          return { 'invalid': true }
        }
        return null;
      }]),
    });
  }

  public record: any = this.defaultRecordValue();

  public submit() {
    this._personService.signup(this.record)
      .then(result => {
        this.informationBar.title = "You have been registered.";
        this.informationBar.message = "Login using: " + result.data.code;
        this.signupForm.reset();
        this._notificationService.snackMessage(result.message);
      })
      .catch(error => {
        this._notificationService.snackMessage(error.data);
      })
  }
}
