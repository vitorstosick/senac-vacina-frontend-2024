import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      VacinaListagemComponent,
      VacinaDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    FormsModule
  ]
})
export class VacinasModule { }
