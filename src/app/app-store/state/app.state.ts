import {
  viaCepState,
  initialCepState,
  } from '../../pages/viaCep/_viaCep-store/viaCep.state';
  
  // Import app states inside the main AppState interface
  export interface AppState {
    cep: viaCepState;
  }
  
  // Setup the initial AppState
  export const initialAppState: AppState = {
    cep: initialCepState,
  };
  
  export function getInitialState(): AppState {
    return initialAppState;
  }