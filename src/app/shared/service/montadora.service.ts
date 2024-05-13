import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroSeletor } from '../model/seletor/carro.seletor';
import { Montadora } from '../model/montadora';

@Injectable({
  providedIn: 'root',
})
export class MontadoraService {
  private readonly API =
    'http://localhost:8080/senac-20241-backend-exemplos/rest/montadora';

  constructor(private httpClient: HttpClient) {}

  public consultarEstoqueCarros(id: number): Observable<Montadora>{
    return this.httpClient.get<Montadora>(this.API + '/estoque-carros/' + id);
  }

  public listarTodas(): Observable <Array<Montadora>> {
    return this.httpClient.get<Array<Montadora>>(this.API + '/todas');
  }

}
