import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXPENSESLIST } from './mock-expenses';
import { Expenses } from './expenses';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor() {}

  getExpenses(): Observable<Expenses[]> {
    const expenseslist = of(EXPENSESLIST);
    return expenseslist;
  }
}
