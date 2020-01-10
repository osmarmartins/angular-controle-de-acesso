import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaGruposComponent } from './grupo-lista/lista-grupos.component';

const grupoRoutes: Routes = [
  {path: 'grupos', component: ListaGruposComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(grupoRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class GrupoRoutingModule { }
