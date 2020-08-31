import { NgModule } from "@angular/core";
import { ContentRouterModule } from "./content.routing.module";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent],
  schemas: [],
  imports: [CommonModule, ContentRouterModule, RouterModule, HttpClientModule],
  exports: [ContentRouterModule],
  providers: [UserService]
})
export class ContentModule { }
