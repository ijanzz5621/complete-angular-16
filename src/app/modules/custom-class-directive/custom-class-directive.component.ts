import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { ClassDirective } from './CustomDirectives/class.directive';

@Component({
  selector: 'app-custom-class-directive',
  standalone: true,
  imports: [
    NgClass,
    ClassDirective
  ],
  templateUrl: './custom-class-directive.component.html',
  styleUrl: './custom-class-directive.component.css'
})
export class CustomClassDirectiveComponent {

}
