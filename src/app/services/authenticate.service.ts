import {  Injectable} from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../util/api.service';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private api_url: any;
  public login: any;

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) {
    this.api_url = apiService.getUrl();
   }

  setAuthenticate(login) {
    this.login = login;
    console.log("USUARIO AUTHENTICADO", login);
        sessionStorage.setItem('access_token', login.data.access_token);

    return this.login;
  }

  getAuthenticate(): Observable<any> {
    this.login = [];
    this.login.access_token = sessionStorage.getItem('access_token');
    return this.login;
  }

}
