import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../../../domain/customer';
import { CustomerService } from '../../../../../service/CustomerService';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-contas-pagar',
  imports: [CommonModule, TableModule, Button, SelectModule],
  standalone: true,
  templateUrl: './contas-pagar.html',
  styleUrl: './contas-pagar.scss',
})
export class ContasPagar {
  customers!: Customer[];

  first = 0;

  rows = 10;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
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
    return this.customers ? this.first + this.rows >= this.customers.length : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
