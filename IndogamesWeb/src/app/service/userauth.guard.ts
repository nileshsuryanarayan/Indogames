import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/User.model';
import { MOCK_ADMIN_USER } from '../mockdata/mock.data';
import { Observable } from 'rxjs';

@Injectable()
export class UserAuthGuard implements CanActivate {

    isLoggedIn = false;

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (this.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }

    public setLoginTrue(value: boolean) {
        this.isLoggedIn = value;
    }
}
