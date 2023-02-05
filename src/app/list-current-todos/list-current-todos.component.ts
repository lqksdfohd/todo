import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo-model';
import { ResetService } from '../services/reset-service';
import { Observer } from "rxjs";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-current-todos.component.html',
  styleUrls: ['./list-current-todos.component.css']
})
export class ListCurrentTodosComponent implements OnInit {

  @Input()
  listeTodo:TodoModel[];
  affichageCreerTodo:boolean = false;

  constructor(private resetService:ResetService) { }

  ngOnInit(): void {
    const observeurReset:Observer<boolean> = {
      next : (bool) => {
        this.affichageCreerTodo = false;
      },
      error : (erreur) => {},
      complete : () => {}
    }

    this.resetService.ajouterObserveur(observeurReset);

  }

  afficherCreerTodoPopup(){
    this.affichageCreerTodo = true;
  }

}
