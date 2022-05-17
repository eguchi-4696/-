import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
<a routerLink="/home">{{ title }}</a>
<router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = '家計簿アプリ';
}
