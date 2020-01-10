import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BarraNavegacaoComponent } from './shared/components/barra-navegacao/barra-navegacao.component';

import { HomeModule } from './home/home.module';
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

    HomeModule,
    UsuariosModule,
    OperacoesModule,
    GruposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
