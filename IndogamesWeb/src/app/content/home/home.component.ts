import { Component, OnInit } from '@angular/core';

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
        this.deskImage = '../../../assets/images-dev/desk.jpg';
        this.rrcpImage = '../../../assets/images-dev/rrcp.jpg';
        this.dotsImage = '../../../assets/images-dev/dots.jpg';
    }
}
