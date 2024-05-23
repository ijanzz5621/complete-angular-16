import { Component } from '@angular/core';

import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    NgTemplateComponent,
    NgContainerComponent
  ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {

}
