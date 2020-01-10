import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdicionaUsuarioComponent } from './usuario-form/adiciona-usuario.component';
import { ListaUsuariosComponent } from './usuario-lista/lista-usuarios.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AdicionaUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule
  ],
  exports: [
    ListaUsuariosComponent,
    AdicionaUsuarioComponent
  ]
})

export class UsuariosModule { }
