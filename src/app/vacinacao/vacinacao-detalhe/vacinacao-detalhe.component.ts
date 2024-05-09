import { PesquisadorService } from './../../shared/service/pesquisador.service';
import { PaisService } from './../../shared/service/pais.service';
import { Component, OnInit } from '@angular/core';
import { Vacinas } from '../../shared/model/vacina';
import { Pessoa } from '../../shared/model/pessoa';
import { Pais } from '../../shared/model/pais';
import Swal from 'sweetalert2';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { VacinasService } from '../../shared/service/vacina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aplicacao } from '../../shared/model/aplicacao';

@Component({
  selector: 'app-vacinacao-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss',
})
export class VacinacaoDetalheComponent implements OnInit{

  public pessoas: Array<Pessoa> = new Array();
  public vacinas: Array<Vacinas> = new Array();
  public vacinacao: Aplicacao = new Aplicacao();

  constructor (
    private vacinaService: VacinasService,
    private pessoaService: PesquisadorService,
    private vacinacaoService: VacinacaoService,
    private router: Router,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.pessoaService.consultarTodasPessoas().subscribe(
      retorno => (
        this.pessoas = retorno
      )
    );

    this.vacinaService.listarTodas().subscribe(
      retorno => (
        this.vacinas = retorno
      )
    );
  }




}
