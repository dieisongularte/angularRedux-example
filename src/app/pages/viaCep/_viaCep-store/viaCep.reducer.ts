import { CepActionsType, CepActions } from './viaCep.actions';
import { viaCepState, initialCepState } from './viaCep.state';

export const viaCepReducers = (
  state = initialCepState,
  action: CepActions
): viaCepState => {
  switch (action.type) {
    case CepActionsType.GetOneCepSuccess: {
      return {
        ...state,
        selectedCep: action.payload,
      };
    }

    default:
      return state;
  }
};