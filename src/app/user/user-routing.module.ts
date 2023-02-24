import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SaveUserComponent } from './components/save-user/save-user.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'save', component: SaveUserComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserRoutingModule { }
