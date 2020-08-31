import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/User.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    users: User[];
    error: any;
    constructor(private service: UserService) { }

    ngOnInit() {
        this.service.getUsers()
            .subscribe(
                (data: User[]) => {
                    this.users = data,
                        error => this.error = error
                    console.log(this.users);
                }
            );
    }
}
