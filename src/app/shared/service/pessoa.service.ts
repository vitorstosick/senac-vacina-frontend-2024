import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { PessoaSeletor } from '../model/seletor/pessoa.seletor';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private readonly API =
    'http://localhost:8080/senac-vacinacao-20241-vitor-stosick/rest/pessoa';

  constructor(private httpClient: HttpClient) {}

  public consultarTodasPessoas(): Observable<Array<Pessoa>> {
    return this.httpClient.get<Array<Pessoa>>(this.API + '/todas');
  }

  public consultarPorPesquisador(): Observable<Array<Pessoa>> {
    return this.httpClient.get<Array<Pessoa>>(this.API + '/pesquisadores');
  }

  public consultarPessoaPorId(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.API + '/' + id);
  }

  public inserir(pessoa: Pessoa): Observable<any> {
    return this.httpClient.post<Pessoa>(this.API + '/inserir', pessoa);
  }

  public atualizar(pessoa: Pessoa): Observable<any> {
    return this.httpClient.put(this.API + '/atualizar', pessoa);
  }

  public excluir(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + id);
  }

  public consultarComSeletor(seletor: PessoaSeletor): Observable<Array<Pessoa>>{
    return this.httpClient.post<Array<Pessoa>>(this.API + '/filtro', seletor);
  }
}
