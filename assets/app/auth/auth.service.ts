import {User} from "./user.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";
import {ErrorService} from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private errorService: ErrorService) {}

    signUp(user: User) {

        const body = JSON.stringify(user);
        console.log(body);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => {
            console.log(response);
            return    response
        })
            .catch((error: HttpErrorResponse) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });

    }

    signin(user: User) {

        const body = JSON.stringify(user);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response)
            .catch((error: HttpErrorResponse) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });

    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token')!=null;
    }
}