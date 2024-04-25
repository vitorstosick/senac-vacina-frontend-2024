import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/senac-vacinacao-20241-vitor-stosick/rest/pais";

  public consultarTodos(): Observable<Array<Pais>>{
    return this.httpClient.get<Array<Pais>>(this.API + '/todos');
  }

}
