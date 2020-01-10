import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacaoComponent } from './operacao/operacao.component';

const operacaoRoutes: Routes = [
  {path: 'operacoes', component: OperacaoComponent}
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
