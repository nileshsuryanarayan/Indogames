import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user/userhome/home.component';
import { UserAuthGuard } from '../service/userauth.guard';
import { UserProfileComponent } from './user/userprofile/profile.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: UserHomeComponent, canActivate: [UserAuthGuard], canDeactivate: [] },
    { path: 'profile', component: UserProfileComponent, canActivate: [UserAuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRouterModule {}
