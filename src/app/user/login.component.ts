import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl:'./login.component.html',
    styles:[`
        em{float:right; color:#E05C65; padding-left:10px;}
    `]
    
})

export class LoginComponent{
    constructor(private auth:AuthService, private route:Router){

    }
    submitLogin(formValue){ 
        this.auth.loginUser(formValue.userName, formValue.password);
        this.route.navigate(['/events']);
    }

}