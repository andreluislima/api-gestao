import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './form-login.html',
  styleUrls: ['./form-login.scss'],
  providers:[provideNgxMask({ dropSpecialCharacters: true })]
})
export class FormLogin {
  title_form = 'Login';
  apiUrl = 'http://localhost:8080/auth/login';

  // configuração dos campos e suas validações
  fields = [
    {
      label: 'CPF',
      name: 'login', // agora o nome do formControl bate com o backend
      type: 'text',
      placeholder: 'Digite seu CPF',
      validators: [
        Validators.required,
        Validators.pattern(/^\d{11}$/)

      ],
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
    login: {
      required: 'Por favor, insira o CPF.',
      pattern: 'O CPF deve estar no formato 000.000.000-00.',
    },
    senha: {
      required: 'Informe sua senha para continuar.',
      minlength: 'A senha deve ter no mínimo 6 caracteres.',
    },
  };

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
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
    if (!control || !control.errors) return '';

    const firstErrorKey = Object.keys(control.errors)[0];
    return this.errorMessages[fieldName][firstErrorKey] || 'Campo inválido.';
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { login, senha } = this.loginForm.value;

    this.http
      .post<any>(this.apiUrl, { login, senha })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            alert('CPF ou senha incorretos.');
          } else {
            alert('Erro ao conectar-se à API.');
          }
          return throwError(() => error);
        })
      )
      .subscribe((res) => {
        alert(res.mensagem);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      });
  }
}
