import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];
  defaultItem: MenuItem;
  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {id: '1', label: 'Users', icon: 'pi pi-user', command : (event) =>  {this.activeItem = event.item}},
      {id: '2', label: 'Birthdays Of Month', icon: 'pi pi-calendar', command : (event) =>  {this.activeItem = event.item}},
      {id: '3', label: 'Email providers', icon: 'pi pi-envelope', command : (event) =>  {this.activeItem = event.item}}
    ]

    this.defaultItem = this.items[0];
    this.activeItem = this.defaultItem;
  }

}
