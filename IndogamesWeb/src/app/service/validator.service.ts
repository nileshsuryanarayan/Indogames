import { Injectable } from '@angular/core';
import { FormError } from '../models/form.error.model';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { appConstants } from '../app.constants';

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
      console.log(control.errors[err].requiredPattern);
      if (err.match('required')) {
        errorText = errorText + ' is Mandatory';
      } else if (err.match('minlength')) {
        errorText =
          errorText +
          ' must be atleast ' +
          control.errors[err].requiredLength +
          ' characters';
      } else if (err.match('maxlength')) {
        errorText =
          errorText +
          ' must be maximum ' +
          control.errors[err].requiredLength +
          ' characters';
      } else if (err.match('pattern')) {
        this.pattern = control.errors[err].requiredPattern;
        switch (this.pattern) {
          case appConstants.number_regex: {
            errorText = '- only numeric characters allowed';
            break;
          }
          case appConstants.email_regex: {
            errorText = '- invalid email';
            break;
          }
        }
      }
      return errorText;
    }
  }
}
