import { Component } from '@angular/core';
import { NgStyle

 } from '@angular/common';
@Component({
  selector: 'app-custom-style-directive',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './custom-style-directive.component.html',
  styleUrl: './custom-style-directive.component.css'
})
export class CustomStyleDirectiveComponent {

  active: boolean = false;

}
