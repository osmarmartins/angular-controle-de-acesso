import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { OperacoesModule } from './operacoes/operacoes.module';
import { GruposModule } from './grupos/grupos.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    OperacoesModule,
    GruposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
