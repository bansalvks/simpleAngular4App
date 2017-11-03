import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Injectable()
export class CustomeValidatorsService {

  constructor() { }

  public alphaNumeric(isRequired: Boolean = true, minimum: number = undefined, maximum: number = undefined) {
    let validations = [];

    if (isRequired) validations.push(Validators.required);

    if (minimum) validations.push(Validators.minLength(minimum));

    if (maximum) validations.push(Validators.maxLength(maximum));

    validations.push(Validators.pattern(/^(?![0-9]*$)[a-zA-Z0-9]+$/));

    return new FormControl("", validations)
  }

  public email(isRequired: Boolean = true, minimum: number = undefined, maximum: number = undefined) {
    let validations = [];

    if (isRequired) validations.push(Validators.required);

    if (minimum) validations.push(Validators.minLength(minimum));

    if (maximum) validations.push(Validators.maxLength(maximum));

    validations.push(Validators.pattern("[^ @]*@[^ @]*"));

    return new FormControl("", validations)
  }


  public numeric(isRequired: Boolean = true, minimum: number = undefined, maximum: number = undefined) {
    let validations = [];

    if (isRequired) validations.push(Validators.required);

    if (minimum) validations.push(Validators.minLength(minimum));

    if (maximum) validations.push(Validators.maxLength(maximum));

    validations.push(Validators.pattern(/^\d+$/));;

    return new FormControl("", validations)
  }
}
