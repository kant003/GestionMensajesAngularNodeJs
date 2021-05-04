import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-mensajes-edit',
  templateUrl: './mensajes-edit.component.html',
  styleUrls: ['./mensajes-edit.component.scss']
})
export class MensajesEditComponent implements OnInit {
  public form: FormGroup;
  public id!: string;
  constructor(
    private formBuilder: FormBuilder,
    private mensajeService: MensajeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.form = formBuilder.group({
      msg: ['', Validators.required],
      user: ['Pedro']
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if(this.id){ // Hay que actualizar el mensaje
      this.mensajeService.getMensajeById(this.id).subscribe(
        result => this.form.patchValue(result),
        error => alert('Error al cargar los datos del mensaje'+error)
      )
    }
  }

  onSubmit(datos: Mensaje){
    if(this.id){ // Hay que actualizar el mensaje
      this.actualizarMensaje(this.id, datos)
    }else{ // Hay que crear un mensaje nuevo
      this.guardarMensaje(datos)
    }
  }

  guardarMensaje(datos: Mensaje){
    this.mensajeService.saveMensaje(datos).subscribe(
      result => this.router.navigate(['/listamensajes']),
      error => alert('Error al guardar el mensaje:'+error)
    )
  }
  actualizarMensaje(id: string, datos:Mensaje){
    this.mensajeService.updateMensaje(id, datos).subscribe(
      result => this.router.navigate(['/listamensajes']),
      error => alert('Error al actualizar el mensaje'+error)
    )
  }
}
