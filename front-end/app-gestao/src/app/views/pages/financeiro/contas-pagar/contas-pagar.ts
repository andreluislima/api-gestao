import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { Despesa } from '../../../../../domain/despesas';
import { DespesaService } from '../../../../../service/DespesaService';

@Component({
  selector: 'app-contas-pagar',
  imports: [CommonModule, TableModule, SelectModule],
  standalone: true,
  templateUrl: './contas-pagar.html',
  styleUrl: './contas-pagar.scss',
})
export class ContasPagar implements OnInit {
  despesas: Despesa[] = [];

  first = 0;
  rows = 10;

  constructor(private despesaService: DespesaService) {}

  ngOnInit(): void {
    this.despesaService.listar().subscribe({
      next: (res) => (this.despesas = res),
      error: () => console.error('Erro ao carregar despesas'),
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number }): void {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.despesas ? this.first + this.rows >= this.despesas.length : true;
  }

  isFirstPage(): boolean {
    return this.despesas ? this.first === 0 : true;
  }
}
