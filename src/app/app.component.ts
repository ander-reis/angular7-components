import {Component, OnInit} from '@angular/core';
import {NotifyMessageService} from './services/notify-message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private notifiyMessage: NotifyMessageService) {

    }

    ngOnInit(): void {
        // this.notifiyMessage.success('titulo', 'texto');
        // this.notifiyMessage.error('titulo', 'texto');
    }
}
