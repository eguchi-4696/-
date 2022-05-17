import { Component, OnInit } from '@angular/core';
import { EXPENSESLIST } from '../mock-expenses';
import { Expenses } from '../expenses';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expensesList = EXPENSESLIST;
  selectedExpenses?: Expenses;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expensesService
      .getExpenses()
      .subscribe((expensesList) => (this.expensesList = expensesList));
  }

  onSelect(expenses: Expenses): void {
    this.selectedExpenses = expenses;
  }
}
