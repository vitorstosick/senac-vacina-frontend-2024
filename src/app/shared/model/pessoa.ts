import { Pais } from "./pais";

export interface Pessoa {

  id: number,
  nome: string,
  dataNascimento: Date,
  sexo: string,
  cpf: string,
  tipo: number,
  paisOrigem: Pais

}
