import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

 #http = inject(HttpClient);

 getTodos(): Observable<any>{
    const url='https://dummyjson.com/todos';
    return this.#http.get(url);
 }

 
  constructor() { }
}
