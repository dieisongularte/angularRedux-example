import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { viaCepReducers } from './viaCep.reducer';
import { viaCepEffects } from './viaCep.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cep', viaCepReducers),
    EffectsModule.forFeature([viaCepEffects]),
  ],
  providers: [viaCepEffects],
})
export class viaCepStoreModule {}