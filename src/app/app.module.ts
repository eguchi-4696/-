import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { ExpensesDetailComponent } from './expenses-detail/expenses-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpensesEditComponent,
    ExpensesDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
