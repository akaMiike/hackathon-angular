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
import { ListBirthdaysComponent } from './components/list-birthdays/list-birthdays.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { ListEmailProvidersComponent } from './components/list-email-providers/list-email-providers.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    HomeComponent,
    ListBirthdaysComponent,
    SaveUserComponent,
    ListEmailProvidersComponent
  ],
  imports: [
    TooltipModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    CommonModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
