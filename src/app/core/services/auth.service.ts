import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {API} from "../constants/api.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #http = inject(HttpClient)

  login(data: {username: string, password: string}): Observable<any> {
    const url = `${API.URL}/auth/login`;
    const body = {
      username: data.username,
      password: data.password
    };

    return this.#http.post(url, body);
  }
}
