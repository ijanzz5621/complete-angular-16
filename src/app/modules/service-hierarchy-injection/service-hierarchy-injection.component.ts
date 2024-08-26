import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-service-hierarchy-injection',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './service-hierarchy-injection.component.html',
  styleUrl: './service-hierarchy-injection.component.css'
})
export class ServiceHierarchyInjectionComponent {

}
