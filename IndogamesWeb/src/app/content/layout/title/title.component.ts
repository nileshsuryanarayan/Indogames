import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'title-bar',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title = 'INDOGAMES';
  userIcon = './assets/profile/u.png';
  ilogo = './assets/logo/i.png';
  glogo = './assets/logo/g.png';
  environment = environment.env;
}
