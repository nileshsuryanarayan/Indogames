import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './userhome/home.component';
import { UserProfileComponent } from './userprofile/profile.component';

@NgModule({
    declarations: [
        UserHomeComponent,
        UserProfileComponent
    ],
    schemas: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        UserHomeComponent,
        UserProfileComponent
    ],
    providers: []
})
export class UserModule { }
