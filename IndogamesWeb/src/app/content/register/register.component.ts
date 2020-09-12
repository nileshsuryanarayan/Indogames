import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { MustMatch } from 'src/app/validators/forms.validator';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/service/validator.service';
import { FormError } from 'src/app/models/form.error.model';
import { appConstants } from 'src/app/app.constants';

@Component({
  selector: 'new-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  registrationErr: string = null;
  formError: FormError;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private validator: ValidatorService
  ) {}

  ngOnInit() {
    this.registerationForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.maxLength(20)]],
      mobileNum: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(appConstants.number_regex)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(appConstants.email_regex)
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formError = this.validator.validateForm(this.registerationForm);
    if (this.formError === null) {
      /* this.userService.postRegister(this.registerationForm).subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
            ) */
      this.router.navigate(['login']);
    } else {
      // There's nothing we can do it here
    }
  }

  confirmPassValidation(pass: FormControl, confPass: FormControl): boolean {
    if (pass.value === confPass.value) {
      return true;
    } else {
      return false;
    }
  }
}
