import { Component } from '@angular/core';

import { NgTemplateComponent } from './ng-template/ng-template.component';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    NgTemplateComponent,
    
  ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {

}
