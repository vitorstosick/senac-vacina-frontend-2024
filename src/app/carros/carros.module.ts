import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosMontadoraComponent } from './carros-montadora/carros-montadora.component';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { FormsModule } from '@angular/forms';
import { CarrosRoutingModule } from './carros-routing.module';

@NgModule({
  declarations: [
    CarrosMontadoraComponent,
    CarrosListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarrosRoutingModule
  ]
})
export class CarrosModule { }
