import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs';
import { ApiService } from '../util/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api_url: any;

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { 
    this.api_url = apiService.getUrl();
  }

  authenticate(login): any {
    console.log(login);
    return this.http.post(this.api_url + 'Profile/Token', login);
  }
}
