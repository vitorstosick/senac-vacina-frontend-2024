import { BaseSeletor } from "./base.seletor";

export class PessoaSeletor extends BaseSeletor{
  nomePessoa: string;
  cpf: string;
  sexoPessoa: string;
  tipoPessoa: number;
  nomePais: string;
  dataNascimento: Date;
}
