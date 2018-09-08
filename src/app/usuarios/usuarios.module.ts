import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdicionaUsuarioComponent } from './adiciona-usuario/adiciona-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioRoutingModule } from './usuario-routing/usuario-routing.module';

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
