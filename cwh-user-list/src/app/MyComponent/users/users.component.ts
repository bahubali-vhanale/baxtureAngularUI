import { Component, OnInit } from '@angular/core';
import { User } from '../../User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

  users: User[] = [];
  localItem: string | null;


  constructor() {
    this.localItem = localStorage.getItem("users");
    if (this.localItem == null) {
      this.users = [];
    }
    else {
      this.users = JSON.parse(this.localItem)
    }


  }


  deleteUser(user: User) {
    console.log(user);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  userAdd(user: User) {
    console.log(user);
   
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));

  }
  toggleUser(user: User) {
    const index = this.users.indexOf(user);
    this.users[index].isAdmin = !this.users[index].isAdmin;
    localStorage.setItem("users", JSON.stringify(this.users));

  }



}


