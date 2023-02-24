import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserRoutingModule } from './user-routing.module';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    ListUsersComponent,
    HomeComponent
  ],
  imports: [
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
