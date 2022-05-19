import { Component, OnInit } from '@angular/core';
import { Expenses } from '../expenses';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenseslist = Expenses[] = [];
  selectedExpenses?: Expenses;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expensesService.getExpenses()
      .subscribe((expenseslist) => (this.expenseslist = expenseslist));
  }

  onSelect(expenses: Expenses): void {
    this.selectedExpenses = expenses;
  }
}
