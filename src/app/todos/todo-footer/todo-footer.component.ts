import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro =>{
     this.filtroActual = filtro;
    })
  }

  cambiarFiltro (filtro: filtrosValidos)
{
   this.store.dispatch(setFiltro({filtro}))
}
}
