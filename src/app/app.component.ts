import { Component, ViewEncapsulation  } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({// @  is decorator that includes metatada (angular familiar)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None ,
  providers: [AuthService]
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  pageTitle: string = 'My Angular Test App..';

  logout(){
    this.authService.logout();
  }
}
