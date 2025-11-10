import { Component } from '@angular/core';
// import { FormLogin } from "../form-login/form-login";
// import { Brand } from "../brand/brand";
import { FormLogin } from '../../components/form-login/form-login';
import { Brand } from '../../components/brand/brand';  

@Component({
  selector: 'app-login',
  imports: [FormLogin, Brand],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
}
