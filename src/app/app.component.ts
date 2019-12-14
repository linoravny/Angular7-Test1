import { Component, ViewEncapsulation  } from '@angular/core';

@Component({// @  is decorator that includes metatada (angular familiar)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  pageTitle: string = 'Angular 7 - Test 1';
}
