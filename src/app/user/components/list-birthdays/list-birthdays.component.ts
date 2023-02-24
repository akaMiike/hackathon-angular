import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-birthdays',
  templateUrl: './list-birthdays.component.html',
  styleUrls: ['./list-birthdays.component.css']
})
export class ListBirthdaysComponent implements OnInit {

  usersBirthday: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllBirthdaysOfMonth()
  }

  getAllBirthdaysOfMonth(){
    this.userService.getUsersBirthdaysOfMonth().subscribe((users) => this.usersBirthday = users)
  }

}
