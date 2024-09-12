import { Component, Inject, inject, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../../../app.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  selectedUser: User | undefined;
  //userService2 = inject(UserService);

  constructor(@Inject(USER_TOKEN) private userService: UserService) {
  }

  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      console.log(this.selectedUser);
    });
  }
}
