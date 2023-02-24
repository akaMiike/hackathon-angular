import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/UserRegister.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL: string = `${environment.api}/user`

  constructor(
    private http: HttpClient
  ) {}

  getAllUsers(nameInitial?: string): Observable<User[]>{
    return this.http.get<User[]>(this.URL, {
      params: {
        nameInitial: nameInitial
      }
    });
  }

  getUsersBirthdaysOfMonth(month?: string): Observable<User>{
    return this.http.get<User>(this.URL + '/birthdays', {
      params:{
        month: month
      }
    })
  }

  getAllUsersEmailProviders(): Observable<string[]>{
    return this.http.get<string[]>(this.URL + '/email-providers')
  }

  createUser(name: string, email: string, login: string, password: string, birthDate?: string){
    return this.http.post(this.URL, {
      name: name,
      email: email,
      login: login,
      password: password,
      ...(birthDate && {birthDate: birthDate})
    })
  }

  deleteUser(userId: number){
    return this.http.delete(this.URL + `/${userId}`)
  }



}
