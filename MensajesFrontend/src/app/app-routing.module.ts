import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesEditComponent } from './components/mensajes-edit/mensajes-edit.component';
import { MensajesListComponent } from './components/mensajes-list/mensajes-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: 'listamensajes', component: MensajesListComponent},//get (listo)
  {path: 'editmensaje', component: MensajesEditComponent},//post (inserto)
  {path: 'editmensaje/:id', component: MensajesEditComponent},//put (actualizar)

  {path: 'listausers', component: UsersListComponent},//get (listo)
  {path: 'edituser', component: UsersEditComponent},//post (inserto)
  {path: 'edituser/:id', component: UsersEditComponent},//put (actualizar)

  {path: '**', component: MensajesListComponent},//put (actualizar)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
