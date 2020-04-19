import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.setMenu();
  }

  setMenu() {
    this.items = [
      {
          label: 'Candidato',
          items: [
              {label: 'Eduardo Henrique'},
              {label: '11 960676769'}
          ]
      },
      {
          label: 'Opções',
          icon: 'pi pi-fw pi-list',
          items: [
            {label: 'Sair', routerLink: 'login'}
          ]
      }
    ];
  }
  
}
