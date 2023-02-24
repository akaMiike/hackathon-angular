import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../models/User.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];

  form = this.fb.group({
    nameInitial: ['']
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    console.log(this.form.value.nameInitial)
    this.userService.getAllUsers(this.form.value.nameInitial).subscribe(
      (users) => {this.users = users;}
    )
  }

}
