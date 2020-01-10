import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const usuarioRoutes: Routes = [

  {path: 'usuarios/form', component: UsuarioFormComponent},

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
