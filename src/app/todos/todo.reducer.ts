import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, limpiarTodos } from './todo.actions';

export const estdoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

 const _todoReducer = createReducer(
  estdoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(limpiarTodos, state => state.filter(todo => !todo.completado)),
  on(borrar, (state, {id}) => state.filter(todo=>todo.id !==id)),
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
  on(toggleAll, (state, {completado}) => {
    return state.map(todo=>{
            return {
                ...todo,
                completado: completado
              }
     
    })
  }),


);

export function todoReducer(state:any,action:any){
    return _todoReducer(state, action);
}