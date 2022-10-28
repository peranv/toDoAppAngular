import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estdoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

 const _todoReducer = createReducer(
  estdoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
);

export function todoReducer(state:any,action:any){
    return _todoReducer(state, action);
}