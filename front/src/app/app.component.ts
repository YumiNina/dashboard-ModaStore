import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menu: Array<any> = []
  options: Array<any> = []

  constructor() {

  }

  ngOnInit(): void {
    this.menu = [
      { name: '' },
      { name: '' },
      { name: ''},
      { name: '' },
    ]

    this.options = [
      { name: 'INICIO' },
      { name: '' }
    ]
  }
}
