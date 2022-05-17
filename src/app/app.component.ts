import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{ title }}</h1>
<nav>
  <a routerLink="/home">home</a>
</nav>
<router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = '家計簿アプリ';
}
