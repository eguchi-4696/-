import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { ExpensesDetailComponent } from './expenses-detail/expenses-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: ExpensesComponent },
      { path: 'detail', component: ExpensesDetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpensesEditComponent,
    ExpensesDetailComponent,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
