import { Component, OnInit } from "@angular/core";
import { User } from 'src/app/models/User.model';
import { UserAuthGuard } from 'src/app/service/userauth.guard';

@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user: User;
    profileImage = './assets/logo/crown--no-bg.png';

    constructor(userauthguard: UserAuthGuard) {}

    ngOnInit() {
        this.user = history.state.user;
        console.log('In profile component...');
        console.log(this.user);
        this.user.id
    }
}
