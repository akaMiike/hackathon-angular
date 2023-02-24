import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../models/User.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    birthDate: [null],
    password: ['', [Validators.required]]
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.userService.createUser(
      this.userForm.value.name,
      this.userForm.value.email,
      this.userForm.value.login,
      this.userForm.value.password,
      this.userForm.value.birthDate
    ).subscribe(() => {
      this.messageService.add({
        severity:'success',
        summary:'Success',
        detail:'User created Successfully'
      })
      this.router.navigate(['/users'])
    })
  }
}
