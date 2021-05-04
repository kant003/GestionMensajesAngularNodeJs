import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesEditComponent } from './components/mensajes-edit/mensajes-edit.component';
import { MensajesListComponent } from './components/mensajes-list/mensajes-list.component';

const routes: Routes = [
  {path: 'listamensajes', component: MensajesListComponent},//get (listo)
  {path: 'editmensaje', component: MensajesEditComponent},//post (inserto)
  {path: 'editmensaje/:id', component: MensajesEditComponent},//put (actualizar)
  {path: '**', component: MensajesListComponent},//put (actualizar)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
