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

@Component({
  selector: 'new-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  registrationErr: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
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
            Validators.maxLength(10)
          ],
          Validators.pattern('^[0-9]*$')
        ],
        email: [
          '',
          [Validators.required, Validators.email, Validators.maxLength(50)]
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      {
        Validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  onSubmit() {
    if (this.registerationForm.invalid) {
      this.registrationErr = this.userService.postRegister(
        this.registerationForm
      );
      if (!!this.registrationErr) {
      } else {
        this.router.navigate['login'];
        // this.registrationErr = 'Something went wrong!';
      }

      /* this.userService.postRegister(this.registerationForm).subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
            ) */
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
