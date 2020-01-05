import { Component } from '@angular/core';
import { routerTransition } from './core/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],

})
export class AppComponent {
  title = 'Stock-Web-App';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
