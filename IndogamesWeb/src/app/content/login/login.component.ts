import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/User.model';
import { Login } from 'src/app/models/login.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserAuthGuard } from 'src/app/service/userauth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[] = null;
  error: HttpErrorResponse = null;
  @Input() username: string;
  @Input() password: string;
  @Input() user: User;
  login: Login;
  isLoading = true;
  status: string;
  userFromService: User;
  loginFormSubmitted = false;
  noUserText = '*User not found';

  constructor(
    private service: UserService,
    private router: Router,
    private userauthguard: UserAuthGuard,
    // private stateService: StateService
  ) { }

  ngOnInit() {
    this.status = 'Fetching users...';
    this.service.getUsers().subscribe(
      (data: User[]) => {
        this.users = data,
          this.isLoading = false;
      },
      (err: HttpErrorResponse) => {
        this.error = err,
          this.isLoading = false,
          this.status = 'Oops! Backend server didn\'t respond';
      }
    );
  }

  /**
   * @param $event MouseClick event
   */
  onClickLogin($event) {
    this.login = {
      username: this.username,
      password: this.password
    };
    this.userFromService = this.service.postLogin(this.login);
    if (!!this.userFromService) {
      this.userauthguard.setLoginTrue(true);
      this.router.navigate(['home'], {state: {user: this.userFromService}});
    } else {
      this.loginFormSubmitted = true;
      this.router.navigate(['login']);
    }
    /* this.service.postLogin(this.login).subscribe(
      (data: User) => {
        console.log(data);
        this.userauthguard.setLoginTrue(true);
        this.router.navigate(['home']);
      }, error => {
        console.log(error);
        this.router.navigate(['home']);
      }); */
  }

  /**
   *
   * @param user user object which is selected for login
   */
  fillLogin(user: User) {
    this.username = user.email;
    this.password = user.password;
  }
}
