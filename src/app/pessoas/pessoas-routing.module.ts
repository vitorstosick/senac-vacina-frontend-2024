import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';

const routes: Routes = [
  { path: '', component: PessoaListagemComponent },
  { path: 'detalhes', component: PessoaDetalheComponent },
  { path: 'detalhes/:id', component: PessoaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoasRoutingModule {}
