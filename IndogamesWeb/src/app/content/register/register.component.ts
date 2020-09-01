import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'new-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    firstname: FormControl;
    lastname: FormControl;
    email: FormControl;
    password: FormControl;
    registerationForm: FormGroup = new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
    });

    ngOnInit() {

    }

    onClickRegister(registerForm: FormGroup) {
        console.log(registerForm.get('firstname').value);
        console.log(registerForm.get('lastname').value);
    }

}
