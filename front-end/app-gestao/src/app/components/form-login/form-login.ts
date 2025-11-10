import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-login',
  imports: [RouterLink, CommonModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.scss',
})
export class FormLogin {
  title_form="Login";
   
  fields = [
    {label:'CPF', type:'text', id:'cpf', placeholder:'Digite seu CPF'},
    {label:'Senha', type:'text', id:'senha', placeholder:'Digite sua senha'},
  ]

  buttons=[
    {label:'Entrar', type:'btn', style:'btn-primary'},
    {label:'Cadastre-se', type:'btn', style:'btn-secondary', link:'/signin'}
  ]

}
