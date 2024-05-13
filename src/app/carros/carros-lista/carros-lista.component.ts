import { CarroService } from './../../shared/service/carro.service';
import { Montadora } from './../../shared/model/montadora';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MontadoraService } from '../../shared/service/montadora.service';

@Component({
  selector: 'app-carros-lista',
  //standalone: true,
  //imports: [],
  templateUrl: './carros-lista.component.html',
  styleUrl: './carros-lista.component.scss'
})

export class CarrosListaComponent implements OnInit{

  public carros: Array<Carro> = new Array();
  public carro: number;
  public seletor: CarroSeletor = new CarroSeletor();
  public montadoras: Array<Montadora> = new Array();

  constructor(
    private carroService: CarroService,
    private montadoraService: MontadoraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pesquisar();
    this.montadoraService.listarTodas().subscribe(
      (resultado) => {
        this.montadoras = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Ocorreu um erro ao buscar por montadora.', 'error');
      }
    );
  }

  public pesquisar() {
    this.carroService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.carros = resultado;
        if (this.carros.length === 0) {
          // Mostrar alerta se nenhum veículo for encontrado
          Swal.fire('Nenhum veículo encontrado', '', 'warning');
        }
      },
      (erro) => {
        // Mostrar alerta em caso de erro
        Swal.fire('Erro', 'Ocorreu um erro ao buscar os veículos.', 'error');
      }
    );
  }

  public limpar() {
    this.seletor = new CarroSeletor();
  }

}
