import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from '../models/login.model';
import { appConstants } from '../app.constants';
import { MOCK_ADMIN_USER, MOCK_ADMIN_LOGIN_CREDS } from '../mockdata/mock.data';

@Injectable()
export class UserService {
    userUrl: string = appConstants.backendBaseUrl + 'users';
    loginUrl: string = appConstants.backendBaseUrl + 'login';

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>(this.userUrl)
            .pipe(
                retry(2),
                catchError(error => {
                    console.log('Error in userservice', error);
                    return throwError(error);
                })
            );
    }

    /* postLogin(login: Login) {
        return this.http.post<User>(this.loginUrl, login)
            .pipe(
                catchError(error => {
                    console.log('Error in service', error);
                    return throwError(error);
                })
            );
    } */

    postLogin(login: Login): User {
        if (login != null) {
            if (login.username === MOCK_ADMIN_LOGIN_CREDS.username
                && login.password === MOCK_ADMIN_LOGIN_CREDS.password) {
                return MOCK_ADMIN_USER;
            }
        } else { return null; }

    }
}
