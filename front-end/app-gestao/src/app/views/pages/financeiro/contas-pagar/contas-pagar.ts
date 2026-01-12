import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { Despesas } from '../../../../../domain/despesas';
import { DespesaService } from '../../../../../service/DespesaService';


@Component({
  selector: 'app-contas-pagar',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, SelectModule],
  templateUrl: './contas-pagar.html',
  styleUrl: './contas-pagar.scss',
})
export class ContasPagar implements OnInit {
  despesas: Despesas[] = [];

  total = 0;
  pagos = 0; // depois você calcula conforme sua regra (ex: status = PAGO)

  constructor(private despesaService: DespesaService) {}

  ngOnInit(): void {
    this.buscar(0, 10);
  }

  pageChange(event: any) {
    const page = Math.floor((event.first ?? 0) / (event.rows ?? 10));
    const size = event.rows ?? 10;
    this.buscar(page, size);
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value?.trim();
    this.buscar(0, 10, value);
  }

  private buscar(page: number, size: number, search?: string) {
    this.despesaService.getDespesas({ page, size, search }).subscribe({
      next: (res: any) => {
        // se sua API retornar lista simples:
        this.despesas = Array.isArray(res) ? res : (res.content ?? res.data ?? []);

        // total do mês (exemplo simples)
        this.total = this.despesas.reduce((acc, d) => acc + (d.valor ?? 0), 0);
      },
      error: (err) => console.error(err),
    });
  }
}
