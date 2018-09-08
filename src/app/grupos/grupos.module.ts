import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing/grupo-routing.module';
import { ListaGruposComponent } from './lista-grupos/lista-grupos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GrupoRoutingModule,
    RouterModule
  ],
  declarations: [
    ListaGruposComponent
  ],
  exports: [
    ListaGruposComponent
  ]
})
export class GruposModule { }
