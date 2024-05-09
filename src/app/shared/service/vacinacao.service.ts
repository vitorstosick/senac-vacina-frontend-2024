import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aplicacao } from '../model/aplicacao';

@Injectable({
  providedIn: 'root',
})
export class VacinacaoService {
  private readonly API =
    'http://localhost:8080/senac-vacinacao-20241-vitor-stosick/rest/vacinacao';

  constructor(private httpClient: HttpClient) {}

  inserir(vacinacao: Aplicacao): Observable<Aplicacao> {
    return this.httpClient.post<Aplicacao>(this.API + '/inserir', vacinacao);
  }

  atualizar(alterar: Aplicacao): Observable<Aplicacao> {
    return this.httpClient.post<Aplicacao>(this.API + '/atualizar', alterar);
  }

  excluir(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir' + id);
  }

  consultarPorId(id: number): Observable<Aplicacao> {
    return this.httpClient.get<Aplicacao>(this.API + '/' + id);
  }

  consultarTodasAplicacoes(): Observable<Array<Aplicacao>> {
    return this.httpClient.get<Array<Aplicacao>>(this.API + '/todas');
  }

  consultarTodasVacinasPorId(id: number): Observable<Array<Aplicacao>> {
    return this.httpClient.get<Array<Aplicacao>>(this.API + '/vacinas/' + id);
  }

  consultarTodasPessoasPorId(id: number): Observable<Array<Aplicacao>> {
    return this.httpClient.get<Array<Aplicacao>>(this.API + 'pessoa' + id)
  }
}
