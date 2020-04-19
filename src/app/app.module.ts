
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// LOCALIZACAO
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

// PIRME NG MODULES
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';


// ANGULAR COMPONENTS
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

// SERVICES
import { ApiService } from './util/api.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { LoadComponent } from './load/load.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    LoadComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    InputMaskModule,
    ButtonModule,
    TableModule,
    MenubarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    UserService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
