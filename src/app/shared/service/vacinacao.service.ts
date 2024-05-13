import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacinacao } from '../model/vacinacao';
import { VacinacaoSeletor } from '../model/seletor/vacinacao.seletor';

@Injectable({
  providedIn: 'root',
})
export class VacinacaoService {
  private readonly API =
    'http://localhost:8080/senac-vacinacao-20241-vitor-stosick/rest/vacinacao';

  constructor(private httpClient: HttpClient) {}

  inserir(vacinacao: Vacinacao): Observable<Vacinacao> {
    return this.httpClient.post<Vacinacao>(this.API + '/inserir', vacinacao);
  }

  atualizar(alterar: Vacinacao): Observable<Vacinacao> {
    return this.httpClient.post<Vacinacao>(this.API + '/atualizar', alterar);
  }

  excluir(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir' + id);
  }

  consultarPorId(id: number): Observable<Vacinacao> {
    return this.httpClient.get<Vacinacao>(this.API + '/' + id);
  }

  consultarTodasAplicacoes(): Observable<Array<Vacinacao>> {
    return this.httpClient.get<Array<Vacinacao>>(this.API + '/todas');
  }

  consultarTodasVacinasPorId(id: number): Observable<Array<Vacinacao>> {
    return this.httpClient.get<Array<Vacinacao>>(this.API + '/vacinas/' + id);
  }

  consultarTodasPessoasPorId(id: number): Observable<Array<Vacinacao>> {
    return this.httpClient.get<Array<Vacinacao>>(this.API + 'pessoa' + id);
  }

  listarComSeletor(seletor: VacinacaoSeletor): Observable<Array<Vacinacao>>{
    return this.httpClient.post<Array<Vacinacao>>(this.API + '/filtro', seletor)
  }

}
