import { ActionReducerMap } from '@ngrx/store';
// App state
import { AppState } from '../state/app.state';
// App modules
import { viaCepReducers } from 'src/app/pages/viaCep/_viaCep-store/viaCep.reducer';
// All app reducers goes here
export const appReducers: ActionReducerMap<AppState, any> = {
  cep: viaCepReducers,
};