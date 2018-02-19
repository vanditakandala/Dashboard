
import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component ({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {

    constructor(private authService: AuthService, private router:Router){}

    onSubmit(form: NgForm){
        const user = new User(
            form.value.email,
            form.value.password
        );
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        form.resetForm();
    }
}