import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    timestamp: Date;
    copyright: string;

    ngOnInit() {
        this.timestamp = new Date();
        this.copyright = 'All © Copyrights preserved 2020';
    }
}
