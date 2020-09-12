import { Injectable } from '@angular/core';
import { FormError } from '../models/form.error.model';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { appConstants, errorConstants } from '../app.constants';

@Injectable()
export class ValidatorService {
  error: FormError;
  pattern: any;

  public validateForm(form: FormGroup): FormError {
    let errTxt: string;
    for (const formControl in form.controls) {
      // gives me individual Form Control object
      if (form.controls[formControl].invalid) {
        errTxt = this.generateErrTxt(form.controls[formControl]);
        this.error = {
          isError: true,
          errorField: formControl,
          errorText: formControl + errTxt
        };
        return this.error;
      }
    }
    return null;
  }

  private generateErrTxt(control: AbstractControl): string {
    let errorText = '';
    for (const err in control.errors) {
      if (control.errors.hasOwnProperty(err)) {
        console.log(control.errors[err].requiredPattern);
        if (err.match('required')) {
          errorText = errorConstants._REQUIRED;
        } else if (err.match('minlength')) {
            errorText = control.errors[err].requiredLength + errorConstants._MINIMUM_LENGTH;
        } else if (err.match('maxlength')) {
            errorText = control.errors[err].requiredLength + errorConstants._MAXIMUM_LENGTH;
        } else if (err.match('pattern')) {
            this.pattern = control.errors[err].requiredPattern;
            switch (this.pattern) {
              case appConstants.number_regex: {
                errorText = errorConstants._ONLY_NUMBERS;
                break;
              }
              case appConstants.email_regex: {
                errorText = errorConstants._INVALID_EMAIL;
                break;
              }
            }
        }
        return errorText;
      }
    }
  }
}
