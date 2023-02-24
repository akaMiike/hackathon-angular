import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-email-providers',
  templateUrl: './list-email-providers.component.html',
  styleUrls: ['./list-email-providers.component.css']
})
export class ListEmailProvidersComponent implements OnInit {

  emailsProviders: string[]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUsersEmailProviders()
  }

  getAllUsersEmailProviders(){
    this.userService.getAllUsersEmailProviders().subscribe((emails) => this.emailsProviders = emails)
  }

}
