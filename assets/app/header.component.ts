
import {Component} from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        .navbar-inverse {
            background-color: black;
            font-color: white;
            margin-bottom: 20px;
        }
        .navbar a {
            color: white;
        }
        

    `]
})
export class HeaderComponent {
    isIn = false;

    toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
    }
}