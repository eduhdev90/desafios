import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs';
import { ApiService } from '../util/api.service';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api_url: any;
  private headers: any;
  private auth: any;
  public user: any;

  constructor(
    private apiService: ApiService,
    private authService: AuthenticateService,
    private http: HttpClient
  ) {
    this.api_url = apiService.getUrl();
    this.auth = this.authService.getAuthenticate();
    console.log("VEIOISSO", this.auth)
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.auth.access_token
    });
   }


   getUsers(limit): any {
       return this.http.get(this.api_url + 'Profile/List?limit=' + limit,  { 'headers': this.headers });
  }

}
