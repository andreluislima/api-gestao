import { Routes } from '@angular/router';
import { Login } from './views/pages/auth/login/login';
import { SignIn } from './views/pages/auth/sign-in/sign-in';
import { DefaultLayout } from './layout/default-layout/default-layout';
import { Lancamentos } from './lancamentos/lancamentos';


export const routes: Routes = [
    {path:'login', component:Login},
    {path:'signin', component:SignIn},
    {path:'teste', component:DefaultLayout},
    {path:'lancamentos', component:Lancamentos},
    {path:'', redirectTo:'login', pathMatch:'full'}
];
