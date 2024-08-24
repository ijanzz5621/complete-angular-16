import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribe(type: string) {
    // Add user to the database

    // Send email with subscription details

    // Allow user to access the services

    alert('Thank you for subscribing '+ type +' service. You can access the service now.');
    console.log("Thank you!!!");
  }

}
