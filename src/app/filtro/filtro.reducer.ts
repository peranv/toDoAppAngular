import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

export const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state: filtrosValidos, {filtro}) => filtro),
  
);

export function filtroReducer(state:any, action: Action)
{
    return _filtroReducer(state, action);
}