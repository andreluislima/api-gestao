import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/auth/login/login';
import { SignIn } from './pages/auth/sign-in/sign-in';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'signin', component:SignIn},
    {path:'dashboard', component:Dashboard},
    {path:'', redirectTo:'login', pathMatch:'full'}
];
