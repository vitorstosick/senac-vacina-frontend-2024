import { Component, OnInit } from '@angular/core';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoaService } from '../../shared/service/pessoa.service';
import { PaisService } from '../../shared/service/pais.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './pessoa-detalhe.component.html',
  styleUrl: './pessoa-detalhe.component.scss',
})
export class PessoaDetalheComponent implements OnInit {
  public pais: Array<Pais> = new Array();
  public pessoas: Array<Pessoa> = new Array();
  public pessoa: Pessoa = new Pessoa();
  public idPessoa: number;

  constructor(
    private router: Router,
    private pessoaService: PessoaService,
    private paisService: PaisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idPessoa = params['id'];
      if (this.idPessoa) {
        this.buscarPessoa();
      }
    });

    this.pessoaService.consultarPorPesquisador().subscribe(
      (resposta) => {
        this.pessoas = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao ao consultar por pesquisador!', erro, 'error');
      }
    );

    this.paisService.consultarTodos().subscribe(
      (resultado) => {
        this.pais = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas paises', erro);
      }
    );
  }

  public salvar(): void {
    if (this.idPessoa) {
      this.atualizar();
    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.pessoaService.inserir(this.pessoa).subscribe(
      (resposta) => {
        this.pessoa = resposta;
        Swal.fire('Pessoa cadastrada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao cadastrar uma pessoa!', erro.error.mensagem, 'error');
      }
    );
  }

  public atualizar(): void {
    this.pessoaService.atualizar(this.pessoa).subscribe(
      (resposta) => {
        Swal.fire('Pessoa atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire(
          'Erro ao atualizar a pessoa: ' + erro.error.mensagem,
          'error'
        );
      }
    );
  }

  public buscarPessoa(): void {
    this.pessoaService.consultarPessoaPorId(this.idPessoa).subscribe(
      (vacina) => {
        this.pessoa = vacina;
      },
      (erro) => {
        Swal.fire('Erro ao buscar uma vacina!', erro, 'error');
      }
    );
  }

  public voltar() {
    this.router.navigate(['/pessoas']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
