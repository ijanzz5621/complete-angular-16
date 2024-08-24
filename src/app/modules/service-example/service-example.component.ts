import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideContentComponent } from './side-content/side-content.component';

@Component({
  selector: 'app-service-example',
  standalone: true,
  imports: [
    HeaderComponent,
    MainContentComponent
  ],
  templateUrl: './service-example.component.html',
  styleUrl: './service-example.component.css'
})
export class ServiceExampleComponent {

}
