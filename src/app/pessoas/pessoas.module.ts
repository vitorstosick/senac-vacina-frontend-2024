import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoas-routing.module';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PessoaListagemComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule
  ]
})
export class PessoasModule { }
