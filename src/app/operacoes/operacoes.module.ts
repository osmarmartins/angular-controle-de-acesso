import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaOperacoesComponent } from './lista-operacoes/lista-operacoes.component';
import { OperacaoRoutingModule } from './operacao-routing/operacao-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OperacaoRoutingModule,
    RouterModule
  ],
  declarations: [
    ListaOperacoesComponent
  ],
  exports: [
    ListaOperacoesComponent
  ]
})
export class OperacoesModule { }
