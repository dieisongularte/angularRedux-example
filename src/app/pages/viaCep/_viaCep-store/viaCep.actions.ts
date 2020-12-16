import { Action } from '@ngrx/store';
import { Cep } from '../models/cep';

export enum CepActionsType {
  GetOneCep = '[Cep] Get One Cep',
  GetOneCepSuccess = '[Cep] Get One Cep Success',
}

export class GetOneCep implements Action {
  public readonly type = CepActionsType.GetOneCep;
  constructor(public payload: number) {}
}

export class GetOneCepSuccess implements Action {
  public readonly type = CepActionsType.GetOneCepSuccess;
  constructor(public payload: Cep) {}
}

export type CepActions =
  | GetOneCep
  | GetOneCepSuccess;