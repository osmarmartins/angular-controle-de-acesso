import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  @Input() opcaoMenu;

  constructor() { }

  ngOnInit() {
  }

}
