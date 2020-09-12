import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './content/layout/layout.module';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { SentenceCasePipe } from './content/pipes/sentence-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentenceCasePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SentenceCasePipe]
})
export class AppModule { }
