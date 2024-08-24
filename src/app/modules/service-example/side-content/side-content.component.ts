import { Component } from '@angular/core';

@Component({
  selector: 'app-side-content-service',
  standalone: true,
  imports: [],
  templateUrl: './side-content.component.html',
  styleUrl: './side-content.component.css'
})
export class SideContentComponent {

  onSubscribeClicked() {
    // Add user to the database

    // Send email with subscription details

    // Allow user to access the services

    alert('Thank you for subscribing. You can access the services now.');
    console.log("Thank you!!!");
  }

}
