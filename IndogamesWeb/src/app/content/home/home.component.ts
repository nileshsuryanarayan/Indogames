import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    deskImage: string;
    rrcpImage: string;
    dotsImage: string;

    ngOnInit() {
        this.deskImage = environment.image_directory + 'desk.jpg';
        this.rrcpImage = environment.image_directory + 'rrcp.jpg';
        this.dotsImage = environment.image_directory + 'dots.jpg';
    }
}
