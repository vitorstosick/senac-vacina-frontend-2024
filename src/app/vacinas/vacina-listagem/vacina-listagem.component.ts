import { Component, OnInit } from '@angular/core';
import { Vacinas } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacina.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoaService } from '../../shared/service/pessoa.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss',
})
export class VacinaListagemComponent implements OnInit {
  public vacinas: Array<Vacinas> = new Array();
  public vacina: number;
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();
  public totalPaginas: Number = 0;
  public readonly TAMANHO_PAGINA: number = 3;

  constructor(
    private vacinaService: VacinasService,
    private paisService: PaisService,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paisService.consultarTodos().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('erro ao consultar vacina por país', erro);
      }
    );

    this.pessoaService.consultarPorPesquisador().subscribe(
      (resultado) => {
        this.pesquisadores = resultado;
      },
      (erro) => {
        console.error('erro ao consultar vacinas por pesquisadores', erro);
      }
    );
  }

  private consultarTodasVacinas() {
    this.vacinaService.listarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas vacinas', erro);
      }
    );
  }

  public pesquisar() {
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('erro ao consultar por seletor', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new VacinaSeletor();
  }

  public atualizar(idVacinaSelecionada: number) {
    this.router.navigate(['/vacinas/detalhes/', idVacinaSelecionada]);
  }

  public excluir(vacinaSelecionada: Vacinas) {
    Swal.fire({
      title: 'Deseja excluir vacina?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.vacinaService.excluir(vacinaSelecionada.id).subscribe(
          (resultado) => {
            this.pesquisar();
            Swal.fire('Sucesso!', 'Vacina Excluida com sucesso! ', 'success');
          },
          (erro) => {
            Swal.fire(
              'Erro!',
              'Erro ao excluir vacina: ' + erro.error.mensagem,
              'error'
            );
          }
        );
      }
    });
  }

  public contarPaginas(){
    this.vacinaService.contarPaginas(this.seletor).subscribe(
      resultado => {
        this.totalPaginas = resultado
      },
      erro => {
        Swal.fire('Erro ao consultar total de páginas', erro.error.mensagem, 'error');
      }
    )
  }

  atualizarPaginacao() {
    this.contarPaginas();
    this.pesquisar();
  }

  avancarPagina(){
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPagina() {
    this.seletor.pagina--;
    this.pesquisar();
  }

  irParaPagina(indicePagina: number) {
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }

  criarArrayPaginas(): any[] {
    return Array(this.totalPaginas).fill(0).map((x, i)=> i +1);
  }

}
