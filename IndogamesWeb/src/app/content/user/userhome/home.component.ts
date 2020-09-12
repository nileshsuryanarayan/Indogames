import { Component, OnInit } from '@angular/core';
import { UserAuthGuard } from 'src/app/service/userauth.guard';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';

@Component({
    selector: 'user-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class UserHomeComponent implements OnInit {
    user: User;

    constructor(
        private userauthguard: UserAuthGuard,
        private router: Router
    ) {}

    ngOnInit() {
        this.user = history.state.user;
        console.log(history.state.user);
    }

    goToProfile() {
        this.userauthguard.setLoginTrue(true);
        this.router.navigate(['profile'], {state: {user: this.user}});
    }

    logout() {
        this.userauthguard.isLoggedIn = false;
        this.router.navigate(['']);
        history.pushState({isLoggedIn: false}, 'Logout-state');
    }
}
