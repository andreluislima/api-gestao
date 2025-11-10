import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
   

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './form-login.html',
  styleUrls: ['./form-login.scss'],
})
export class FormLogin {
  title_form = 'Login';
  apiUrl = 'http://localhost:8080/auth/login'

  // configuração dos campos e suas validações
  fields = [
    {
      label: 'CPF',
      name: 'cpf',
      type: 'text',
      placeholder: 'Digite seu CPF',
      validators: [Validators.required, Validators.minLength(11)],
    },
    {
      label: 'Senha',
      name: 'senha',
      type: 'password',
      placeholder: 'Digite sua senha',
      validators: [Validators.required, Validators.minLength(6)],
    },
  ];

  // botões do formulário
  buttons = [
    { label: 'Entrar', type: 'submit', style: 'btn-primary' },
    { label: 'Cadastre-se', type: 'button', style: 'btn-secondary', link: '/signin' },
  ];

  // mensagens de erro centralizadas
  errorMessages: {
    [key: string]: { [key: string]: string };
  } = {
    cpf: {
      required: 'Por favor, insira o CPF.',
      minlength: 'O CPF deve conter 11 números válidos.',
    },
    senha: {
      required: 'Informe sua senha para continuar.',
      minlength: 'A senha deve ter no mínimo 6 caracteres.',
    },
  };

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // cria dinamicamente o FormGroup com base nos campos definidos
    const formGroupConfig: any = {};
    this.fields.forEach((f) => {
      formGroupConfig[f.name] = ['', f.validators];
    });

    this.loginForm = this.fb.group(formGroupConfig);
  }

  // método genérico para buscar mensagem de erro com base no tipo de erro
  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    const errors = control?.errors;

    if (!errors) return '';

    const fieldMessages = this.errorMessages[fieldName];
    const firstErrorKey = Object.keys(errors)[0];
    return fieldMessages[firstErrorKey] || 'Campo inválido.';
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { cpf, senha } = this.loginForm.value;

    if (cpf === '100.000.000-01' && senha === '123456') {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('CPF ou senha incorretos. Tente novamente.');
    }
  }


 
}
