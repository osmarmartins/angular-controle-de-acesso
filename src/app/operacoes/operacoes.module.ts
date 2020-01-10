import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacaoRoutingModule } from './operacao-routing.module';
import { OperacaoComponent } from './operacao/operacao.component';
import { OperacaoFormComponent } from './operacao-form/operacao-form.component';

@NgModule({
  imports: [
    CommonModule,
    OperacaoRoutingModule,
    RouterModule
  ],
  declarations: [
    OperacaoComponent,
    OperacaoFormComponent
  ],
  exports: []
})
export class OperacoesModule { }
