import { Montadora } from './../../shared/model/montadora';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MontadoraService } from '../../shared/service/montadora.service';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';

@Component({
  selector: 'app-carros-montadora',
  //standalone: true,
  //imports: [],
  templateUrl: './carros-montadora.component.html',
  styleUrl: './carros-montadora.component.scss'
})
export class CarrosMontadoraComponent implements OnInit{
[x: string]: any;

  public montadora: Montadora = new Montadora();
  public montadoras: Montadora[] = [];


  constructor(
    private montadoraService: MontadoraService){}

  ngOnInit(): void {
    this.consultarTodasMontadoras()
  }

  public consultarEstoqueCarros(montadora: Montadora){
    this.montadoraService.consultarEstoqueCarros(this.montadora.id).subscribe(
      resultado => {
        Swal.fire('Carros em estoque', 'Qtd de carros: ' + resultado,  'info');
      },
      erro => {
        Swal.fire('Selecione uma montadora', erro, 'warning');
      }
    )
  }

  public consultarTodasMontadoras(){
    this.montadoraService.listarTodas().subscribe(
      resultado => {
        this.montadoras = resultado
      },
      erro => {
        console.log('Erro ao consultar todas montadoras' + erro)
      }
    )
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }

}
