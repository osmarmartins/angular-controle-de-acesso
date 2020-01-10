import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PainelComponent
  ]
})
export class HomeModule { }
