import { BaseSeletor } from './base.seletor';

export class VacinacaoSeletor extends BaseSeletor {
  nomePessoa: string;
  nomeVacina: string;
  dataAplicacaoInicio: Date;
  dataAplicacaoFinal: Date;
  avaliacao: number;
}
