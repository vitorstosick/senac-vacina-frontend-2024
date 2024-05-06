import { Routes } from '@angular/router';

export const routes: Routes = [
 // { path: '', redirectTo: 'vacinas', pathMatch: 'full'},
  { path: 'vacinas', loadChildren:() => import('./vacinas/vacinas.module').then(m => m.VacinasModule)},
  { path: 'pessoas', loadChildren:() => import('./pessoas/pessoas.module').then(m => m.PessoasModule)},

];
