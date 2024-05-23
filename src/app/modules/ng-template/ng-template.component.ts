import { Component } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ng16-template',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

}
