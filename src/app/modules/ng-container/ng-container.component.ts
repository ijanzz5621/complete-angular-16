import { Component } from '@angular/core';

import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  toggle: boolean = true;

  onToggle() {
    this.toggle = !this.toggle;
  }

}
