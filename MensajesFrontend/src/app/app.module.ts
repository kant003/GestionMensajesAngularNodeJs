import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MensajesListComponent } from './components/mensajes-list/mensajes-list.component';
import { MensajesEditComponent } from './components/mensajes-edit/mensajes-edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MensajesListComponent,
    MensajesEditComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // conectarse al api(backend)
    FormsModule,  // crear formularios
    ReactiveFormsModule // crear formulario
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
