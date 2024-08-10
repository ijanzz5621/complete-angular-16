import { Component } from '@angular/core';
import { NgTemplateComponent } from "../ng-template/ng-template.component";
import { NgIf } from '@angular/common';
import { IfDirective } from './CustomDirectives/if.directive';

@Component({
  selector: 'app-custom-structure-directive',
  standalone: true,
  imports: [
    NgTemplateComponent,
    NgIf,
    IfDirective
  ],
  templateUrl: './custom-structure-directive.component.html',
  styleUrl: './custom-structure-directive.component.css'
})
export class CustomStructureDirectiveComponent {

  display: boolean = true;
  notDisplay: boolean = false;
  myTempVar: boolean = true;

  displayTermsOfServices() {
    this.display = !this.display;
    this.notDisplay = !this.display;
  }

}
