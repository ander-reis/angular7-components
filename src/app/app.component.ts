import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    flagLogo = true;
    objContext = {
        $implicit: 'Valor',
        name: 'Anderson Reis',
    };
    ngOnInit() {
        setTimeout(() => {
            this.flagLogo = false;
        }, 5000);
    }

    mudarNome(){
        this.objContext.name = 'xxxxxxxxxxxxxxxxxxxxxxxxxx';
    }
}
