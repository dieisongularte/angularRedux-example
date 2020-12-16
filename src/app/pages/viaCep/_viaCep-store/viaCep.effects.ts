import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { viaCepService } from '../service/viaCep.service';

import { AppState } from '../../../app-store/state/app.state';
import * as fromViaCep from './viaCep.actions';

@Injectable()
export class viaCepEffects {
  constructor(
    private viaCepService: viaCepService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getOneCharacter$ = this.actions$
    .pipe(
      ofType(fromViaCep.CepActionsType.GetOneCep),
      mergeMap(({ payload }: { payload: string }) =>
        this.viaCepService.getOneCharacter(payload)
      ),
      map(cep => new fromViaCep.GetOneCepSuccess(cep)),
    );
}