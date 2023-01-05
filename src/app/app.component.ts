import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'l5-teste';

  public toggleMenu = (): void => {
    const aside = document.querySelector('aside');
    aside?.classList.toggle('toggleMenu');
  };
}
