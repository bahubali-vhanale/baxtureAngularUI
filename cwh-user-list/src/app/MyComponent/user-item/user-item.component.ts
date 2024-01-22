import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from 'src/app/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user!: User;
  @Input() i!: number;
  // constructor() { }

  @Output() userDelete: EventEmitter<User> = new EventEmitter();
  @Output() userCheckbox: EventEmitter<User> = new EventEmitter();
  onclick(user: User) {
    this.userDelete.emit(user);
    console.log("clicked");

  }
  onCheckboxClick(user: User) {
    this.userCheckbox.emit(user);
  }

}


