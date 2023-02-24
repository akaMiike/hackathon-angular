import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe(() => {
      this.messageService.add({
        severity:'success', 
        summary:'Success',
        detail:'User deleted successfully'
      })
    });
  }

  confirmUserDeletion(userId: number){
    this.confirmationService.confirm({
      message:"Are you sure you want to delete this user?",
      header:"Confirm Deletion",
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteUser(userId)
        this.users = this.users.filter(user => user.id !== userId)
      }
    })
  }

}
