import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public listaUsuarios: User[] = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(){
    this.userService.getAllUsers().subscribe(
      result => this.listaUsuarios = result,
      error => alert('Error:'+error)
    )
  }

  borrarUser(id: string){
    this.userService.deleteUser(id).subscribe(
      result => this.getUsers(),
      error => alert('Error al intentar borrar el usuario:'+error)
    )
  }
}
