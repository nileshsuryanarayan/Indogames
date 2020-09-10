import { Injectable } from "@angular/core";
import { User } from "../models/User.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { throwError } from "rxjs";
import { Login } from "../models/login.model";
import { appConstants, errorConstants } from "../app.constants";
import { MOCK_ADMIN_USER, MOCK_ADMIN_LOGIN_CREDS } from "../mockdata/mock.data";
import { FormGroup } from "@angular/forms";

@Injectable()
export class UserService {
  userUrl: string = appConstants.backendBaseUrl + "users";
  loginUrl: string = appConstants.backendBaseUrl + "login";
  registerUrl: string = appConstants.backendBaseUrl + "register";
  user: User;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.userUrl).pipe(
      retry(2),
      catchError(error => {
        console.log("Error in userservice", error);
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

  /* postRegister(user: FormGroup) {
    return this.http.post<User>(this.registerUrl, user).pipe(
      catchError(error => {
        console.log('Error in registration service', error);
        return throwError(error);
      })
    );
  } */

  postRegister(_user): string {
    console.log(_user.value);
    let fname: string;
    let lname: string;
    let email: string;
    let mobile: number;
    let password: string;

    if (!!_user.value.firstname) {
      fname = _user.value.firstname;
      if (!!_user.value.lastname) {
        lname = _user.value.lastname;
        if (!!_user.value.mobileNum) {
          mobile = _user.value.mobileNum;
          if (!!_user.value.email) {
            email = _user.value.email;
            if (!!_user.value.password) {
              password = _user.value.password;
              console.log(_user.value.password);
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
