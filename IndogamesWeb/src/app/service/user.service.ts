import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from '../models/login.model';
import { appConstants, errorConstants } from '../app.constants';
import { MOCK_ADMIN_USER, MOCK_ADMIN_LOGIN_CREDS } from '../mockdata/mock.data';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UserService {
  userUrl: string = appConstants.backendBaseUrl + 'users';
  loginUrl: string = appConstants.backendBaseUrl + 'login';
  registerUrl: string = appConstants.backendBaseUrl + 'register';
  user: User;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.userUrl).pipe(
      retry(2),
      catchError(error => {
        console.log('Error in userservice', error);
        return throwError(error);
      })
    );
  }

  /* postLogin(login: Login) {
    return this.http.post<User>(this.loginUrl, login).pipe(
      catchError(error => {
        console.log('Error in service', error);
        return throwError(error);
      })
    );
  } */

  postLogin(login: Login): User {
    if (login != null) {
      if (
        login.username === MOCK_ADMIN_LOGIN_CREDS.username &&
        login.password === MOCK_ADMIN_LOGIN_CREDS.password
      ) {
        return MOCK_ADMIN_USER;
      }
    } else {
      return null;
    }
  }

  postRegister(userForm: FormGroup) {
    this.user = {
      firstname: userForm.get('firstname').value,
      lastname: userForm.get('lastname').value,
      mobileNum: userForm.get('mobileNum').value,
      email: userForm.get('email').value,
      password: userForm.get('password').value
    };
    console.log('User service', this.user);
    return this.http.post<User>(this.registerUrl, this.user).pipe(
      catchError(error => {
        console.log('Error in registration service', error);
        return throwError(error);
      })
    );
  }

  /* postRegister(user): string {
    console.log(user.value);
    let fname: string;
    let lname: string;
    let email: string;
    let mobile: number;
    let password: string;

    fname = user.value.firstname;
    lname = user.value.lastname;
    mobile = user.value.mobileNum;
    email = user.value.email;
    password = user.value.password;
    return null;
  } */
}
