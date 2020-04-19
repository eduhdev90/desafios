import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthenticateService } from '../services/authenticate.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  errorMessage: any;
  load: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.createFormLogin();
  }

  createFormLogin() {
    this.formLogin = this.formBuilder.group({
      password: ['', Validators.required],
      login: ['', Validators.required],
    });
  }

  sendLogin() {
    this.load = true;
    this.loginService.authenticate(this.formLogin.value).subscribe(
      res => {
        console.log(res);
        this.authService.setAuthenticate(res);
        this.router.navigate(['/', 'user']);
      }, err => {
        this.load = false;
        if (err.error.erro) {
          Swal.fire({
            icon: 'error',
            title: 'Erro no seu login !',
            text: JSON.stringify(err.error.errors),
            footer: '<a href>Duvidas contate 11 960676769</a>'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ops !',
            text: 'Entre em contato com o adm',
            footer: '<a href>Duvidas contate 11 960676769</a>'
          });
        }
        console.error(err);
      }, () => {
        this.load = false;
        console.log('FINALIZADO');
      }
    );
  }

}
