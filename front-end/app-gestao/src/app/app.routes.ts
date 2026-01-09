import { Routes } from '@angular/router';
import { Login } from './views/pages/auth/login/login';
import { SignIn } from './views/pages/auth/sign-in/sign-in';
import { DefaultLayout } from './layout/default-layout/default-layout';
import { ContasPagar } from './views/pages/financeiro/contas-pagar/contas-pagar';


export const routes: Routes = [
    {path:'login', component:Login},
    {path:'signin', component:SignIn},
    {path:'dashboard', component:DefaultLayout},
    {path:'despesas', component:ContasPagar},
    {path:'', redirectTo:'login', pathMatch:'full'}
];
