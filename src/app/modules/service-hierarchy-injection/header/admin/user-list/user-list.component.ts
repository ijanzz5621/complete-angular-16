import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';
import { NgFor } from '@angular/common';
import { USER_TOKEN } from '../../../../../app.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(@Inject(USER_TOKEN) private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.GetAllUsers();
  }

  RemoveUser(name: string) {
    this.userService.RemoveUser(name);
  }

  ShowUserDetails(user: User) {
    console.log('Selected User: ', user)
    this.userService.OnShowUserDetails(user);
  }

}
