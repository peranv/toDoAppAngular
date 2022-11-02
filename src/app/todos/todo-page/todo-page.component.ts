import { Component, OnInit,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado:boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  
  }

  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch(actions.toggleAll({ completado: this.completado}));
  }
}
