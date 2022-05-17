import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expenses } from './expenses';
import { EXPENSESLIST } from './mock-expenses';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private heroesUrl = 'api/heroes'; // Web APIのURL

  constructor(private http: HttpClient) {}

  /** サーバーから月ごとの記録を取得する */
  getExpenses(): Observable<Expenses[]> {
    return this.http.get<Expenses[]>(this.heroesUrl);
  }
  getHero(sectionDate: string): Observable<Expenses> {
    const expenses = EXPENSESLIST.find((h) => h.sectionDate === sectionDate)!;
    return of(expenses);
  }
}
