import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/leftpanel.component';
import { RightPanelComponent } from './right-panel/rightpanel.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TitleComponent, FooterComponent, LeftPanelComponent, RightPanelComponent],
  schemas: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [TitleComponent, FooterComponent, LeftPanelComponent, RightPanelComponent],
  providers: []
})
export class LayoutModule {}
