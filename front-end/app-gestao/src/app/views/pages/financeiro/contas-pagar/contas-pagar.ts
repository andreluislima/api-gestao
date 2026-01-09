import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contas-pagar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './contas-pagar.html',
  styleUrl: './contas-pagar.scss',
})
export class ContasPagar {
  table = [
    { col: 'Data', type: 'date', colClass: 'col-12 col-sm-6 col-lg-2 col-xl-2 col-xxl-2' },
    { col: 'Descrição', type: 'text', colClass: 'col-12 col-sm-6 col-lg-3 col-xl-2 col-xxl-2' },
    { col: 'Empresa', type: 'text', colClass: 'col-12 col-sm-6 col-lg-2 col-xl-2 col-xxl-2' },
    { col: 'Forma de Pagamento', type: 'text', colClass: 'col-lg-3 col-xl-2 col-xxl-2' },
    { col: 'Valor', type: 'text', colClass: 'col-12 col-sm-6 col-lg-2 col-xl-2 col-xxl-2' },
    { col: 'Ações', type: 'actions', colClass: 'col-12 col-sm-6 col-lg-2 col-xl-2 col-xxl-2' },
  ];
}
