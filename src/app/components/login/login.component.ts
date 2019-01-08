import { Component } from "@angular/core";


@Component({
    selector: 'login-component', 
    templateUrl: './login.component.html', 
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loggedIn = true; 
    loginId: string;
    passwd: string; 
    
    constructor () {

    }

    login() {
        console.log("user " + this.loginId + "logged in"); 
        this.loggedIn = true; 
    }


}