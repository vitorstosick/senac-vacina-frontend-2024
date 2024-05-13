import { Pessoa } from './pessoa';
import { Vacinas } from './vacina';

export class Vacinacao {
  idVacinacao: number;
  idPessoa: number;
  vacina: Vacinas;
  dataVacina: Date;
  avaliacao: number;
  pessoa: Pessoa;
}
