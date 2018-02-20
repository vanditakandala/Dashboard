import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
import {DashboardComponent} from "./dashboard/dashboard.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}

];

export const routing = RouterModule.forRoot(APP_ROUTES);