import { Cep } from '../models/cep';

export interface viaCepState {
  selectedCep: Cep;
}

export const initialCepState: viaCepState = {
  selectedCep: null,
};