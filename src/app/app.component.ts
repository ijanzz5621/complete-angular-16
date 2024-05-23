import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ModulesComponent } from './modules/modules.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'complete-angular-16';
}
