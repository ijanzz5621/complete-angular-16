import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-ng-switch',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './custom-ng-switch.component.html',
  styleUrl: './custom-ng-switch.component.css'
})
export class CustomNgSwitchComponent {
  tab: string = '';

  showContent(pageName: string) {
    this.tab = pageName;
  }
}
