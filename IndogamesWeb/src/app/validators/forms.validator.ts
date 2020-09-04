import { FormControl, FormGroup } from '@angular/forms';

export function FormGroupValidation(formGroup: FormGroup) {
  return formGroup;
}

export function GeneralFormControl(formControl: FormControl) {
  if (formControl.status === 'INVALID') {
    if (formControl.touched || formControl.dirty) {
      formControl.setErrors({ required: true });
    }
  }
  return formControl;
}

export function MustMatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const pass = formGroup.controls[password];
    const matchPass = formGroup.controls[confirmPassword];

    if (pass.value === matchPass.value) {
      matchPass.setErrors(null);
    } else {
      matchPass.setErrors({ MustMatch: true });
    }
  };
}
