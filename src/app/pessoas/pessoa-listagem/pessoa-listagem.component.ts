import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { PessoaService } from '../../shared/service/pessoa.service';
import { PessoaSeletor } from '../../shared/model/seletor/pessoa.seletor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-listagem',
  // standalone: true,
  // imports: [],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.scss',
})
export class PessoaListagemComponent implements OnInit {
  public pessoas: Array<Pessoa> = new Array();
  public paises: Array<Pais> = new Array();
  public seletor: PessoaSeletor = new PessoaSeletor();

  constructor(
    private pessoaService: PessoaService,
    private paisService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paisService.consultarTodos().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar países' + erro);
      }
    );
    this.consultarTodasAsPessoas();
  }

  private consultarTodasAsPessoas() {
    this.pessoaService.consultarTodasPessoas().subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        console.error('Erro ao listar todas as Pessoas ', erro);
      }
    );
  }

  public pesquisar() {
    this.pessoaService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        debugger
        this.pessoas = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar com seletor pessoa.', erro);
      }
    );
  }

  public excluir(pessoaSelecionada: Pessoa) {
    Swal.fire({
      title: 'Deseja excluir a pessoa?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.pessoaService.excluir(pessoaSelecionada.id).subscribe(
          (resultado) => {
            Swal.fire('Sucesso!', 'Excluido com sucesso.', 'success');
            this.pesquisar();
          },
          (erro) => {
            Swal.fire(
              'Erro!',
              'Erro ao excluir pessoa: ' + erro.error.mensagem,
              'error'
            );
          }
        );
      }
    });
  }

  public atualizar(idPessoaSelecionada: number) {
    this.router.navigate(['/pessoas/detalhes/', idPessoaSelecionada]);
  }

  limpar() {
    this.seletor = new PessoaSeletor();
  }
}
