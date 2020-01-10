import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  isAuth = true;

  usuarios: Usuario[] = [
    { id: 1, nome: 'Beltrano de Tal', login: 'beltrano', email: 'beltrano@test.com', senha: '123', ativo: true},
    { id: 2, nome: 'Ciclano de Tal', login: 'ciclano', email: 'ciclano@test.com', senha: '123', ativo: false},
    { id: 3, nome: 'Fulano de Tal', login: 'fulano', email: 'fulano@test.com', senha: '123', ativo: true},
    { id: 4, nome: 'Osmar Filho', login: 'osmar', email: 'osmar@test.com', senha: '123', ativo: true},
    { id: 5, nome: 'Magalli Carmen', login: 'magalli', email: 'magalli@test.com', senha: '123', ativo: true},
    { id: 6, nome: 'Ticiana Martins', login: 'ticiana', email: 'ticiana@test.com', senha: '123', ativo: false},
    { id: 7, nome: 'Osmar Neto', login: 'neto', email: 'neto@test.com', senha: '123', ativo: false}
  ];


  ngOnInit() {
  }

}
