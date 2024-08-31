import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User('Steve Smith',  'Male', 'Monthly', 'Active'),
    new User('Sharizan', 'Male', 'Yearly', 'Active'),
    new User('Safinaz', 'Female', 'Quarterly', 'Expired')
  ];

  constructor() { }

  GetAllUsers() {
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
  }

  RemoveUser(name: string) {
    let delUser: User = this.users.find(x => x.name == name)!;
    this.users.splice(this.users.indexOf(delUser), 1); 
  }

}
