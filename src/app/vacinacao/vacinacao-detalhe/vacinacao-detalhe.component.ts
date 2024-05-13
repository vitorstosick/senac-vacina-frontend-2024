import { Component, OnInit } from '@angular/core';
import { Vacinas } from '../../shared/model/vacina';
import { Pessoa } from '../../shared/model/pessoa';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { VacinasService } from '../../shared/service/vacina.service';
import { PessoaService } from '../../shared/service/pessoa.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacinacao } from '../../shared/model/vacinacao';

@Component({
  selector: 'app-vacinacao-detalhe',
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss',
})
export class VacinacaoDetalheComponent implements OnInit {
  public vacinas: Array<Vacinas> = new Array();
  public pessoas: Array<Pessoa> = new Array();
  public vacinacao: Vacinacao = new Vacinacao();
  public idVacinacao: number;

  constructor(
    private vacinacaoService: VacinacaoService,
    private vacinaService: VacinasService,
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buscarVacinas();
    this.buscarPessoas();
  }

  buscarVacinas() {
    this.vacinaService.listarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar vacinas' + erro);
      }
    );
  }

  buscarPessoas() {
    this.pessoaService.consultarTodasPessoas().subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar pessoas' + erro);
      }
    );
  }

  salvar(): void {
    this.vacinacaoService.inserir(this.vacinacao).subscribe(
      (resultado) => {
        Swal.fire('Vacinação salva com sucesso', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar vacina!', erro.error.mensagem, 'error');
      }
    );
  }

  voltar(): void {
    this.router.navigate(['']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
