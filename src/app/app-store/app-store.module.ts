import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

// NGRX Dependencies
import { StoreModule, ActionReducer, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store Devtools/Logger
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeLogger } from 'ngrx-store-logger';

// App Global State
import { AppState } from './state/app.state';
import { appReducers } from './reducers/app.reducer';

// App Store modules
import { viaCepStoreModule } from '../pages/viaCep/_viaCep-store/viaCep-store.modules';

// Logger state
export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    viaCepStoreModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
            maxAge: 25,
        })
      : [],
  ],
})
export class AppStoreModule {}