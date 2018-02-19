
import {Component, OnInit} from "@angular/core";
import {FormGroup, NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component ({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(){
        if(this.authService.isLoggedIn()){
            console.log(this.authService.isLoggedIn());
            this.router.navigate(['/auth', 'logout'])
        }
    }

    onSubmit(form: NgForm){
        const user = new User(
                    form.value.email,
                    form.value.password,
                    form.value.firstName,
                    form.value.lastName
                );
        this.authService.signUp(user)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        form.resetForm();
    }
}