
import {Message} from "./message.model";
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ErrorService} from "../errors/error.service";

@Injectable()
export class MessageService {

    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http:HttpClient, private errorService:ErrorService) {}

    setMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
                        ? '?token='+localStorage.getItem('token')
                        : '';
        return this.http.post('http://localhost:3000/message'+token, body, {headers: headers})
            .map((response: Response) => {
                const result = response;
                const message = new Message(result.obj.content, result.user.firstName, result.obj._id, result.user._id);
                console.log(response);
                this.messages.push(message);
                return message;

            })
            .catch((error: HttpErrorResponse) => {
                    this.errorService.handleError(error);
                    return Observable.throw(error);
            });
    }

    getMessage(){
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.obj;
                let transformedMessages: Message[] = [];
                for(let message of messages){
                    transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: HttpErrorResponse) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });

    }

    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token='+localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response)
            .catch((error: HttpErrorResponse) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message),1);
        const token = localStorage.getItem('token')
            ? '?token='+localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map((response: Response) => response)
            .catch((error: HttpErrorResponse) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });
    }
}