import { Component } from '@angular/core';

@Component({
    selector: 'loading-anim',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    loaderGif = './assets/loading/spin.gif';
}
