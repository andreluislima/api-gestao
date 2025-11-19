import { Component } from '@angular/core';
import { FormSignIn } from '../../../components/form-sign-in/form-sign-in';
import { Brand } from '../../../components/brand/brand';

@Component({
  selector: 'app-sign-in',
  imports: [FormSignIn, Brand],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

}
