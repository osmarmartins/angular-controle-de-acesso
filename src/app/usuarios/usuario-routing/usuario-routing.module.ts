import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionaUsuarioComponent } from './../adiciona-usuario/adiciona-usuario.component';
import { ListaUsuariosComponent } from './../lista-usuarios/lista-usuarios.component';

const usuarioRoutes: Routes = [
  {path: 'usuarios', component: ListaUsuariosComponent},
  {path: 'usuarios/add', component: AdicionaUsuarioComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UsuarioRoutingModule { }
