import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/models/User.model";
import { Login } from "src/app/models/login.model";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  users: User[];
  error: any;
  @Input() username: string;
  @Input() password: string;
  @Input() user: User;
  login: Login;
  isLoading: boolean = true;
  @ViewChild('err') err: ElementRef;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: User[]) => {
      this.isLoading = false;
      (
        this.users = data
      ),
        (error: HttpErrorResponse) => (
          this.error = error
        );
    });
  }

  /**
   * 
   * @param $event MouseClick event
   */
  onClickLogin($event) {
    const target = $event.target;
    console.log(this.username + " " + this.password);
    this.login = {
      username: this.username,
      password: this.password
    };
    this.service.postLogin(this.login).subscribe((data: User) => {
      console.log(data);
    });
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
