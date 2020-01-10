import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './home/painel/painel.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { GrupoComponent } from './grupos/grupo/grupo.component';
import { OperacaoComponent } from './operacoes/operacao/operacao.component';

const routes: Routes = [
  { path: 'home', component: PainelComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'grupos', component: GrupoComponent },
  { path: 'operacoes', component: OperacaoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
