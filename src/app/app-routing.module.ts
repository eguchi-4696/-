import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { ExpensesDetailComponent } from './expenses-detail/expenses-detail.component';

const routes: Routes = [{ path: '/home', component: ExpensesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
