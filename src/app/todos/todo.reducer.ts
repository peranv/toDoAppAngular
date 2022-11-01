import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar } from './todo.actions';

export const estdoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

 const _todoReducer = createReducer(
  estdoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {
    return state.map(todo=>{

        if(todo.id === id){
            return {
                ...todo,
                completado: !todo.completado
              }
        }else{
            return todo;
        }
     
    })
  }),

  on(editar, (state, {id, texto}) => {
    return state.map(todo=>{

        if(todo.id === id){
            return {
                ...todo,
                texto: texto
              }
        }else{
            return todo;
        }
     
    })
  }),


);

export function todoReducer(state:any,action:any){
    return _todoReducer(state, action);
}