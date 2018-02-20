import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./messages/message.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./messages/messages.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {LogoutComponent} from "./auth/logout.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {AuthService} from "./auth/auth.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ChartModule} from "angular2-highcharts";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        DashboardComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        MessagesComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,

    ],
    imports: [BrowserModule, FormsModule, routing, HttpClientModule,ChartModule.forRoot(require('highcharts'))
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}