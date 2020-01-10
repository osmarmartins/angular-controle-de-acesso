import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';

const grupoRoutes: Routes = [
  {path: 'grupos', component: GrupoComponent}
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
