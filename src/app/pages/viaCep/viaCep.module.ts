import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepRoutingModule } from './viaCep-routing.module';
import { CepComponent } from './cep/cep.component';


@NgModule({
  declarations: [CepComponent],
  imports: [
    CommonModule,
    CepRoutingModule
  ]
})
export class ViaCepModule { }
