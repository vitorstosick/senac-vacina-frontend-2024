import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacinas } from '../../shared/model/vacina';
import { Pessoa } from '../../shared/model/pessoa';
import { Pais } from '../../shared/model/pais';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import { PaisService } from '../../shared/service/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-detalhe',
  //standalone: true,
  //imports: [VacinasModule],
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})
export class VacinaDetalheComponent implements OnInit {

  public pais: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();
  public vacina: Vacinas = new Vacinas();
  public idVacina: number;

  constructor(
    private vacinaService: VacinasService,
    private router: Router, // COMPONENTE PARA FAZER ROTEAMENTO ENTRA AS TELAS
    private pesquisadorService: PesquisadorService,
    private paisService: PaisService,
    private route: ActivatedRoute, //PEGAR OS PARAMETROS DA URL

  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if (this.idVacina) {
        this.buscarVacina();
      }
    })

    this.pesquisadorService.consultarPorPesquisador().subscribe(
      (resposta) => {
        this.pesquisadores = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao ao consultar por pesquisador!', erro, 'error');
      }
    )

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
    if (this.idVacina) {
      this.atualizar();

    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.vacinaService.salvar(this.vacina).subscribe(
      (resposta) => {
        this.vacina = resposta;
        Swal.fire('Vacina salva com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar uma vacina!', erro, 'error');
      }

    );

  }

  public atualizar(): void {
    this.vacinaService.atualizar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire('Vacina atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a vacina: ' + erro.error.mensagem, 'error');
      }

    )

  }

  public buscarVacina(): void {
    this.vacinaService.consultarPorId(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina;
      },
      (erro) => {
        Swal.fire('Erro ao buscar uma vacina!', erro, 'error');
      }
    )

  }

  public voltar() {
    this.router.navigate(['/'])
  }


}
