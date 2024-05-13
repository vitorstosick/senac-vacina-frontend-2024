import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../model/carro';
import { CarroSeletor } from '../model/seletor/carro.seletor';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  private readonly API =
    'http://localhost:8080/senac-20241-backend-exemplos/rest/carro';

  constructor(private httpClient: HttpClient) {}

  public consultarComSeletor(seletor: CarroSeletor): Observable<Array<Carro>>{
    return this.httpClient.post<Array<Carro>>(this.API + '/filtro', seletor);
  }
}
