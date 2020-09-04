import { NgModule } from '@angular/core';
import { ContentRouterModule } from './content.routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  schemas: [],
  imports: [
    CommonModule,
    ContentRouterModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports: [ContentRouterModule],
  providers: [UserService]
})
export class ContentModule { }
