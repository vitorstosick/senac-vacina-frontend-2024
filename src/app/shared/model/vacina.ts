import { Pais } from './pais';
import { Pessoa } from './pessoa';


export class Vacinas {

  id: number;
  nome: string;
  paisOrigem: Pais;
  pesquisadorResponsavel: Pessoa;
  estagio: number;
  dataInicioPesquisa: Date;
  //mediaVacina: number

}
