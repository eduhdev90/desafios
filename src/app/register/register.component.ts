import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  errorMessage: any;
  load: boolean;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createFormRegister();
  }

  createFormRegister() {
    this.formRegister = this.formBuilder.group({
      password: ['', Validators.required],
      fullName: ['', Validators.required] ,
      login: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  sendRegister() {
    this.load = true;
    this.registerService.register(this.formRegister.value).subscribe(
      res => {
        console.log(res);
        this.load = false;
        Swal.fire({
          icon: 'success',
          title: 'Registro efetuado',
          text: 'Agora você pode acessar o sistema!',
          footer: '<a href>Duvidas contate 11 960676769</a>'
        });
        this.router.navigate(['/', 'login']);
      }, err => {
        this.load = false;
        if (err.error.erro) {
          Swal.fire({
            icon: 'error',
            title: 'Erro no seu cadastro !',
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
