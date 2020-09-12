import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from '../models/login.model';
import { appConstants, errorConstants } from '../app.constants';
import { MOCK_ADMINuser, MOCK_ADMIN_LOGIN_CREDS } from '../mockdata/mock.data';
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
        return MOCK_ADMINuser;
      }
    } else {
      return null;
    }
  }

  /* postRegister(user: FormGroup) {
    return this.http.post<User>(this.registerUrl, user).pipe(
      catchError(error => {
        console.log('Error in registration service', error);
        return throwError(error);
      })
    );
  } */

  postRegister(user): string {
    console.log(user.value);
    let fname: string;
    let lname: string;
    let email: string;
    let mobile: number;
    let password: string;

    if (!!user.value.firstname) {
      fname = user.value.firstname;
      if (!!user.value.lastname) {
        lname = user.value.lastname;
        if (!!user.value.mobileNum) {
          mobile = user.value.mobileNum;
          if (!!user.value.email) {
            email = user.value.email;
            if (!!user.value.password) {
              password = user.value.password;
              console.log(user.value.password);
              return null;
            } else {
              return errorConstants.REQUIRED_PASSWORD;
            }
          } else {
            return errorConstants.REQUIRED_EMAIL;
          }
        } else {
          return errorConstants.REQUIRED_MOBILE;
        }
      } else {
        return errorConstants.REQUIRED_LASTNAME;
      }
    } else {
      return errorConstants.REQUIRED_FIRSTNAME;
    }
  }
}
