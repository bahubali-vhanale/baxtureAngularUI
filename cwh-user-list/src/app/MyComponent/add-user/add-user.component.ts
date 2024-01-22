import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  username: string | undefined;
  pass: string | undefined;
  age:number | undefined;

  @Output() addUser: EventEmitter<User> = new EventEmitter();
  onSubmit() {
    const user = {
      sno: 9,
      username: this.username,
      pass: this.pass,
      isAdmin: true,
      age:0
    }
    this.addUser.emit(user);

  }


}
