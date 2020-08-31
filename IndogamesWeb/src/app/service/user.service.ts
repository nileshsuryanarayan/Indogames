import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http:HttpClient) {}
    getUsers() {
        return this.http.get<User[]>('http://localhost:8080/users')
        .pipe(
            retry(2),
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