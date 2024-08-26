import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

// Note **: 
// 1. If the service not define in child, it will use the same instance of service that has been injected
// in parent component

// 2. If service provider define in child component, it will OVERRIDE the parent service provider

@Component({
  selector: 'app-side-content-service',
  standalone: true,
  imports: [],
  templateUrl: './side-content.component.html',
  styleUrl: './side-content.component.css'
})
export class SideContentComponent {

  constructor(private subscribeService: SubscribeService) {
  }

  onSubscribeClicked() {
    // let subscribeService = new SubscribeService()
    this.subscribeService.onSubscribe('quarterly')
  }

}
