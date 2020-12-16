import { createSelector, createFeatureSelector } from '@ngrx/store';
import { viaCepState } from './viaCep.state';
import { Cep } from '../models/cep';

const selectCeps = createFeatureSelector<viaCepState>('cep');

export const selectSelectedCep = createSelector(
  selectCeps,
  (state: viaCepState) => state.selectedCep
);