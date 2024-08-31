import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-service-hierarchy-header',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    AdminComponent,
    HomeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribeClicked() {
    alert('Subscribed!')
  }

}
