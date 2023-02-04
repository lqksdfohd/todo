import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { TodoModel } from './models/todo-model';
import { ResetService } from './services/reset-service';
import { TodoService } from './services/todo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentTodoList: TodoModel[] = [];
  crossedTodoList: TodoModel[] = [];
  affichageDetailTodo: boolean = false;
  todoDetail:TodoModel;

  constructor(private todoService: TodoService, private resetService:ResetService) { }

  ngOnInit(): void {
    this.currentTodoList = this.todoService.getListeTodo();

    const observerCurrentList:Observer<TodoModel[]> = {
      next: (todoList) => {
        this.currentTodoList = todoList;
      },
      error: (error) => {},
      complete: () => {}
    }

    const observerCrossedTodoList:Observer<TodoModel[]> = {
      next: (todoList) => {this.crossedTodoList = todoList},
      error: (error) => {},
      complete: () => {}
    }

    const observeurTodoEnCours: Observer<TodoModel> = {
      next: todo => {
        this.todoDetail = todo;
        this.affichageDetailTodo = true;
      },
      error: erreur => {},
      complete: () => {}
    }

    const observeurResetEcran: Observer<boolean> = {
      next: (valeur) => {
        this.fermerLesEcrans();
      },
      error: erreur => {},
      complete: () => {}
    }

    this.todoService.addObserverToCurrentList(observerCurrentList);
    this.todoService.addObserverToCrossedList(observerCrossedTodoList);
    this.todoService.ajouterObserveurATodoEnCours(observeurTodoEnCours);
    this.resetService.ajouterObserveur(observeurResetEcran);
  }

  fermerLesEcrans(){
    this.affichageDetailTodo = false;
  }

}
