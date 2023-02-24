import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];
  nameInitial: string;

  constructor(
    private userService: UserService
  ) {
   }

  ngOnInit(): void {

    this.users = [{
      name: "Michael",
      login: "Nicholas",
      email: "mike.abc@abc.com",
      birthDate: "18/09/2001"
    },
    {
      name: "Michael",
      login: "Nicholas",
      email: "mike.abc@abc.com",
      birthDate: "18/09/2001"
    }];
  }

  getAllUsers(){
    this.userService.getAllUsers()
  }

}
