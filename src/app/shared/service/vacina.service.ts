import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacinas } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';


@Injectable({
  providedIn: 'root'
})

export class VacinasService {

  //http://localhost:8080/senac-vacinacao-20241-vitor-stosick
  private readonly API = 'http://localhost:8080/senac-vacinacao-20241-vitor-stosick/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  public listarTodas(): Observable <Array<Vacinas>> {
    return this.httpClient.get<Array<Vacinas>>(this.API + '/todas');

  }

  public consultarPorId(id: number): Observable <Vacinas> {
    return this.httpClient.get<Vacinas>(this.API + '/' + id);

  }

  public consultarComSeletor(seletor: VacinaSeletor): Observable <Array<Vacinas>> {
    return this.httpClient.post<Array<Vacinas>>(this.API + '/filtro', seletor)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + "/excluir/" + id);
  }

  public salvar(vacina: Vacinas): Observable<any> {
    return this.httpClient.post<Vacinas>(this.API + '/inserir', vacina)
  }

  public atualizar(vacina: Vacinas):Observable<any> {
    return this.httpClient.put(this.API + '/atualizar', vacina)
  }

  public contarTotalRegistro(seletor:VacinaSeletor):Observable<number>{
    return this.httpClient.post<number>(this.API + '/contar',seletor);
  }

  public contarPaginas(seletor: VacinaSeletor):Observable<number> {
    return this.httpClient.post<number>(this.API + '/total-pagina', seletor);
  }

}
