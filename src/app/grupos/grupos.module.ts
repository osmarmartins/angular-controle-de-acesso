import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';

@NgModule({
  imports: [
    CommonModule,
    GrupoRoutingModule,
    RouterModule
  ],
  declarations: [
    GrupoComponent,
    GrupoFormComponent
  ],
  exports: [ ]
})

export class GruposModule { }
