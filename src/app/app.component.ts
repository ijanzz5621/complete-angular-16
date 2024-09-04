import { Component, InjectionToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ModulesComponent } from './modules/modules.component';
import { LoggerService } from './modules/service-hierarchy-injection/Services/logger.service';
import { UserService } from './modules/service-hierarchy-injection/Services/user.service';

// Injection token for UserService
export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    LoggerService,
    {provide: USER_TOKEN, useClass: UserService }
  ]
})
export class AppComponent {
  title = 'complete-angular-16';
}
