import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './MyComponent/users/users.component';
import { UserItemComponent } from './MyComponent/user-item/user-item.component';
import { AddUserComponent } from './MyComponent/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    AddUserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
