import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from '../../Services/user.service';
import { USER_TOKEN } from '../../../../app.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    UserListComponent,
    UserDetailComponent,
    FormsModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: []
})
export class AdminComponent {

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  constructor(@Inject(USER_TOKEN) private userService: UserService) {
  }

  AddNewUser() {
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
  }

}
