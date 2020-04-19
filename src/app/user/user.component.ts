import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any;
  cols: any[];
  load: boolean;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    
    this.cols = [
      { field: 'photo', header: 'FOTO' },
      { field: 'fullName', header: 'NOME' },
      { field: 'cpf', header: 'CPF' },
      { field: 'phone', header: 'TELEFONE' },
      { field: 'blocked', header: 'ATIVO' }
  ];

    this.getUsers();
  }

  getUsers(): void {
    this.load = true;
    this.userService.getUsers(30).subscribe(
      res => {
        console.log(res);
        this.users = res.data;
        this.load = false;
      }, err => {
        this.load = false;
      }, () => {
        this.load = false;
      }
    );
  }

}


