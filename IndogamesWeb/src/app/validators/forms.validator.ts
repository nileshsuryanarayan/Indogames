import { FormGroup } from '@angular/forms';

export function matchPassword(form: FormGroup) {
  const password: string = form.get('password').value;
  const confirmpass: string = form.get('confirmPassword').value;
  if (password.length > 0) {
    if (confirmpass.length > 0) {
      if (confirmpass !== password) {
      } else {
      }
    }
  }
}
