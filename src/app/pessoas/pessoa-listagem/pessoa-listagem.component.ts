import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { PessoaSeletor } from '../../shared/model/seletor/pessoa.seletor';

@Component({
  selector: 'app-pessoas-listagem',
 // standalone: true,
 // imports: [],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.scss'
})
export class PessoaListagemComponent implements OnInit{


  public pessoas: Array<Pessoa> = new Array();
  public paises: Array<Pais> = new Array();
  public seletor: PessoaSeletor = new PessoaSeletor();


  constructor(private pessoaService: PesquisadorService,
    private paisService: PaisService){}

  ngOnInit(): void {
    this.consultarTodosPaises();

  }

  consultarTodosPaises(){
    this.paisService.consultarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.error('Erro ao consultar todos os paises', erro);
      }
    )
  }

  private consultarTodasAsPessoas() {
    this.pessoaService.consultarTodasPessoas().subscribe(
      (resultado) => {
        this.pessoas = resultado;

      },
      (erro) => {
        console.error('Erro ao listar todas as Pessoas ', erro)
      }

    )};

    public pesquisar() {
      this.pessoaService.consultarComSeletor(this.seletor).subscribe(
        (resultado) => {
          this.pessoas = resultado;
        },
        (erro) => {
          console.error('erro ao consultar por seletor', erro);
        }
      );
    }

    limpar() {
      throw new Error('Method not implemented.');
      }

}
