import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        pathMatch: "prefix",
        children: [
            { path: "signup", component: SignupComponent },
            { path: "signin", component: SigninComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

export const AuthRoutedComponents = [
    AuthComponent,
    SignupComponent,
    SigninComponent
];
