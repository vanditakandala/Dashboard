
import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
            <app-message
                    *ngFor="let message of messages"
                    [message]="message"
            ></app-message>
    `
})
export class MessageListComponent implements OnInit{
    messages: Message[];
    constructor (private messageService:MessageService) {}

    ngOnInit() {
        this.messageService.getMessage()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;

                }
            );

    }

}