import { Routes } from '@angular/router';
import { SignIn } from './pages/sign-in/sign-in';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'signin', component:SignIn},
    {path:'dashboard', component:Dashboard},
    {path:'', redirectTo:'login', pathMatch:'full'}
];
