import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isHome: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isHome = window.location.pathname === '/';
    console.log('>>>>>>>>>>>>> oninit ' + new Date().getTime());
  }

 }
