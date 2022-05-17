import { Component, OnInit } from '@angular/core';
import { ExpensesComponent } from '../expenses/expenses.component';

@Component({
  selector: 'app-expenses-detail',
  templateUrl: './expenses-detail.component.html',
  styleUrls: ['./expenses-detail.component.css'],
})
export class ExpensesDetailComponent
  extends ExpensesComponent
  implements OnInit
{
  date: Date;
  name: string;
  cost: number;

  constructor() {
    super();
  }

  ngOnInit() {}
}
