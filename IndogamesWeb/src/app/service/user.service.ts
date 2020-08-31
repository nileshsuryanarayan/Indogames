import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from '../models/login.model';
import { appConstants } from '../app.constants';

@Injectable()
export class UserService {
    userUrl: string = appConstants.backendBaseUrl + 'users';
    loginUrl: string = appConstants.backendBaseUrl + 'login';

    constructor(private http:HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(this.userUrl)
        .pipe(
            retry(2),
            catchError(this.httpErrorHandler)
        );
    }

    postLogin(login: Login) {
        return this.http.post<User>(this.loginUrl, login)
        .pipe(
            catchError(this.httpErrorHandler)
        );
    }

    httpErrorHandler(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('Error: ' + error.message);
        } else {
            console.log('Error code: ' + error.status);
            console.log('Error message: ' + error.statusText + ' ' + error.message + ' ' + error.url);
        }
        return throwError('Backend server didn\'t respont');
    }
}