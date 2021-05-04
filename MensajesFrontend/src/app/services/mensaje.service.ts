import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  readonly URL = "http://localhost:5100/mensaje/"
  constructor(private http: HttpClient) { }

  getAllMensajes(): Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>(this.URL)
  }
  getMensajeById(id: String): Observable<Mensaje>{
    return this.http.get<Mensaje>(this.URL + id)
  }
  saveMensaje(mensaje: Mensaje): Observable<any>{
    return this.http.post(this.URL, mensaje)
  }
  deleteMensaje(id: String): Observable<any>{
    return this.http.delete(this.URL + id)
  }
  updateMensaje(id: String, mensaje: Mensaje): Observable<any>{
    return this.http.put(this.URL+id , mensaje)
  }
}
