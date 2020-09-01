import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/leftpanel.component';
import { RightPanelComponent } from './right-panel/rightpanel.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    TitleComponent,
    FooterComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LoadingComponent
  ],
  schemas: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TitleComponent,
    FooterComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LoadingComponent
  ],
  providers: []
})
export class LayoutModule { }
