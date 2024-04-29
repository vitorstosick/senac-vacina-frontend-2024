import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aplicacao } from '../model/aplicacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  private readonly API = 'http://localhost:8080/senac-vacinacao-20241-vitor-stosick/rest/vacinacao';

  constructor(private httpClient: HttpClient) { }

  inserir(vacinacao: Aplicacao):Observable<any> {
    return this.httpClient.post<Aplicacao>(this.API + '/inserir', vacinacao);
  }

  atualizar(alterar: Aplicacao): Observable<any>{
    return this.httpClient.post<Aplicacao>(this.API + '/atualizar', alterar);
  }

  excluir (id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir' + id)
  }

  consultarPorId(id: number):Observable<Aplicacao>{
    return this.httpClient.get<Aplicacao>(this.API + '/' + id);
  }

  consultarTodasAplicacoes(vacinacao: Aplicacao):Observable<Array<Aplicacao>>{
    return this.httpClient.get<Array<Aplicacao>>(this.API + '/todas')
  }

}
