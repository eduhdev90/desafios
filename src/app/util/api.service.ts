import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public user: any;
  public place: any;

  constructor() { }

  getUrl(): any {
    // this.place = 3;
    this.place = 1;

    if (this.place === 1) {
      return 'http://api.template.megaleios.com/api/v1/';
    }

    if (this.place === 3) {
      return 'http://localhost:8000/api/';
    }
  }


}
