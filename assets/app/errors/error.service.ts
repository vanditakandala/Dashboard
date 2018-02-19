import {Error} from "./error.model";
import {EventEmitter} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";

export class ErrorService {
    errorOccured = new EventEmitter<Error>();

    handleError(error:any){
        const errorData = new Error(error.error.title, error.error.error.message);
        this.errorOccured.emit(errorData);
    }
}