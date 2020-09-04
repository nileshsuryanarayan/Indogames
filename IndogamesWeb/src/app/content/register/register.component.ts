import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/forms.validator';

@Component({
    selector: 'new-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerationForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerationForm = this.formBuilder.group({
            firstname: ['', [Validators.required, Validators.maxLength(20)]],
            lastname: ['', [Validators.required, Validators.maxLength(20)]],
            mobileNum: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)], Validators.pattern('^[0-9]*$')],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required]
        }, {
            Validator: MustMatch('password', 'confirmPassword')
        });
    }

    onSubmit() {
        if (this.registerationForm.invalid) {
            console.log(this.registerationForm);
            return;
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
