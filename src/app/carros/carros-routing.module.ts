import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { CarrosMontadoraComponent } from './carros-montadora/carros-montadora.component';

const routes: Routes = [
  { path: '', component: CarrosListaComponent},
  { path: 'montadora', component: CarrosMontadoraComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
