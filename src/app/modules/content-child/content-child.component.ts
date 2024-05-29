import { Component } from '@angular/core';

import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [
    ParentComponent
  ],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent {

}
