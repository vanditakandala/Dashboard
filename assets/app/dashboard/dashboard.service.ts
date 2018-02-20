
import {Injectable} from "@angular/core";
import {ErrorService} from "../errors/error.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Place} from "./place.model";

@Injectable()
export class DashboardService{

    private places: Place[] = [];
    constructor(private http:HttpClient, private errorService:ErrorService) {}

    getPlaces(){
        return this.http.get('http://localhost:3000/places')
            .map((response: Response) => {
                const places = response.obj;
                let placesNew: Places[] = [];
                for(let place of places){
                    placesNew.push(new Place(
                        place.city,
                        place.sales.laptops,
                        place.sales.accessories,
                        place.sales.phones,
                        place.sales.televisions
                    ));
                }
                this.places = placesNew;
                return placesNew;
            })
            .catch((error: HttpErrorResponse) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });

    }
}