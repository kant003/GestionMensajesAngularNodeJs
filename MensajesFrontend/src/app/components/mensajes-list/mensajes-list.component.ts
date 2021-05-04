import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-mensajes-list',
  templateUrl: './mensajes-list.component.html',
  styleUrls: ['./mensajes-list.component.scss']
})
export class MensajesListComponent implements OnInit {
  public listaMensajes: Mensaje[] = []
  constructor(private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.getMensajes()
  }

  getMensajes(){
    this.mensajeService.getAllMensajes().subscribe(
      result => this.listaMensajes = result,
      error => alert('Error:'+error)
    )
  }

  borrarMensaje(id: string){
    this.mensajeService.deleteMensaje(id).subscribe(
      result => this.getMensajes(),
      error => alert('Error al intentar borrar el mensaje:'+error)
    )
  }
}
