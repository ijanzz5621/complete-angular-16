import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header-service',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private subscribeService: SubscribeService) {
  }

  onSubscribeClicked() {
    //   // Add user to the database

    //   // Send email with subscription details

    //   // Allow user to access the services

    //   alert('Thank you for subscribing. You can access the services now.');
    //   console.log("Thank you!!!");

    this.subscribeService.onSubscribe('monthly')

  }
}
