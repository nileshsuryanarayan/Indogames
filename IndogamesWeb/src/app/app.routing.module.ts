import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';
import { LoginComponent } from './content/login/login.component';

const routes: Routes = [
    { path: '', loadChildren: './content/content.module#ContentModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
