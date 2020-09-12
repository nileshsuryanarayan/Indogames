import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/service/validator.service';
import { FormError } from 'src/app/models/form.error.model';
import { appConstants, errorConstants } from 'src/app/app.constants';
import { HttpErrorResponse } from '@angular/common/http';
import * as passValidator from '../../validators/forms.validator';

@Component({
  selector: 'new-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  registrationErr: string = null;
  formError: FormError;
  submitted = false;
  submitLoading = false;
  backendError: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private validator: ValidatorService
  ) {}

  ngOnInit() {
    this.registerationForm = this.formBuilder.group(
      {
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
        confirmPassword: ['', Validators.required],
        submit: ['']
      },
      { validators: passValidator.matchPassword.bind(this.registerationForm) }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.submitLoading = true;
    this.registerationForm.get('submit').disable();
    console.log(this.registerationForm.get('submit').disabled);

    this.formError = this.validator.validateForm(this.registerationForm);
    passValidator.matchPassword(this.registerationForm);

    if (this.formError === null) {
      this.userService.postRegister(this.registerationForm).subscribe(
        data => {
          this.submitLoading = false;
          this.router.navigate(['login']);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.submitLoading = false;
          this.backendError = errorConstants.BackendError + '- ' + err.status;
        }
      );
    } else {
      // There's nothing we can do it here
      this.submitLoading = false;
    }
  }
}
