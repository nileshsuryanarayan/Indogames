import { NgModule } from '@angular/core';
import { ContentRouterModule } from './content.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  schemas: [],
  imports: [ContentRouterModule, RouterModule],
  exports: [ContentRouterModule],
  providers: []
})
export class ContentModule {}
