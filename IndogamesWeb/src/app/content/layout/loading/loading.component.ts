import { Component } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
    selector: 'loading-anim',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    loaderGif: string = '';
}
