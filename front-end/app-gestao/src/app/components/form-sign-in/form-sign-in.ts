import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-sign-in',
  imports: [RouterLink, CommonModule],
  templateUrl: './form-sign-in.html',
  styleUrl: './form-sign-in.scss',
})
export class FormSignIn {
  title_form="Cadastre-se";
  fields = [
    {label:'CPF', type:'text', id:'cpf', placeholder:'Digite seu CPF'},
    {label:'Confirmar CPF', type:'text', id:'cpf', placeholder:'Confirme seu CPF'},
    {label:'Senha', type:'text', id:'cpf', placeholder:'Digite sua senha'},
    {label:'Confirmar Senha', type:'text', id:'cpf', placeholder:'Confirme sua senha'},
  ]

  buttons=[
    {label:'Cadastre-se', type:'btn', style:'btn-primary'}
  ]
}
