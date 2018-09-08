import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaOperacoesComponent } from './../lista-operacoes/lista-operacoes.component';

const operacaoRoutes: Routes = [
  {path: 'operacoes', component: ListaOperacoesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(operacaoRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class OperacaoRoutingModule { }
