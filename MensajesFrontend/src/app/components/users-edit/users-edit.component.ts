import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  public form: FormGroup;
  public id!: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if(this.id){ // Hay que actualizar el mensaje
      this.userService.getUserById(this.id).subscribe(
        result => this.form.patchValue(result),
        error => alert('Error al cargar los datos del usuario'+error)
      )
    }
  }

  onSubmit(datos: User){
    if(this.id){ // Hay que actualizar el mensaje
      this.actualizarUsuario(this.id, datos)
    }else{ // Hay que crear un mensaje nuevo
      this.guardarUsuario(datos)
    }
  }

  guardarUsuario(datos: User){
    this.userService.saveUser(datos).subscribe(
      result => this.router.navigate(['/listausers']),
      error => alert('Error al guardar el usuario:'+error)
    )
  }
  actualizarUsuario(id: string, datos:User){
    this.userService.updateUser(id, datos).subscribe(
      result => this.router.navigate(['/listausers']),
      error => alert('Error al actualizar el usuario'+error)
    )
  }

}
