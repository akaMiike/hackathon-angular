import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  value: string;

  users: User[];

  constructor() { }

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

}
