import { Component } from '@angular/core';
import { SideContentComponent } from '../side-content/side-content.component';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-main-content-service',
  standalone: true,
  imports: [
    SideContentComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  onSubscribeClicked() {
    let subscribeService = new SubscribeService()
    subscribeService.onSubscribe('daily')
  }

}
