import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionaUsuarioComponent } from './usuario-form/adiciona-usuario.component';
import { ListaUsuariosComponent } from './usuario-lista/lista-usuarios.component';

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
