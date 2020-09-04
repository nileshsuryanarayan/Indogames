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

    postLogin(login: Login) {
        return this.http.post<User>(this.loginUrl, login)
            .pipe(
                catchError(error => {
                    console.log('Error in service', error);
                    return throwError(error);
                })
            );
    }
}
