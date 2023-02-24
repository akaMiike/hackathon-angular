import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../models/User.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  editingUser: User;
  isEditMode: boolean
  editOrSaveTitle = "New User";

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
    private activateRoute: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if(this.isEditRoute()){
      this.isEditMode = true;
      var userId = Number(this.activateRoute.snapshot.paramMap.get('id'))
      this.getUserById(userId)
      this.editOrSaveTitle = "Edit User"
    }
  }

  saveUser(){
    if(this.isEditMode) this.updateUser();
    else this.createUser();
  }

  updateUser(){
    this.userService.updateUser(
      this.editingUser.id,
      this.userForm.value.name,
      this.userForm.value.email,
      this.userForm.value.login,
      this.userForm.value.password,
      this.userForm.value.birthDate
    ).subscribe(() => {
      this.messageService.add({
        severity:'success',
        summary:'Success',
        detail:'User updated Successfully'
      })
      this.router.navigate(['/users'])
    })
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

  getUserById(userId: number){
    this.userService.getUserById(userId).subscribe((user) => {
      this.editingUser = user
      this.setEditUserData();
    })
  }

  isEditRoute(){
    return this.router.url.includes('/users/update/')
  }

  setEditUserData(){
    this.userForm.get('name').setValue(this.editingUser.name)
    this.userForm.get('login').setValue(this.editingUser.login)
    this.userForm.get('email').setValue(this.editingUser.email)
    this.userForm.get('birthDate').setValue(this.editingUser.birthDate)
  }
}
