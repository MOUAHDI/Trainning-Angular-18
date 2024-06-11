import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { usersResolver } from "./core/resolvers/users.resolver";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            usersList: usersResolver
        }
    },
    {
        path: 'login',
        component: LoginComponent
    }
]