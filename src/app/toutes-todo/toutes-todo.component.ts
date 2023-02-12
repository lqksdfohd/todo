import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { TodoModel } from '../models/todo-model';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-toutes-todo',
  templateUrl: './toutes-todo.component.html',
  styleUrls: ['./toutes-todo.component.css']
})
export class ToutesTodoComponent implements OnInit {

  currentTodoList: TodoModel[];
  crossedTodoList: TodoModel[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.currentTodoList = this.todoService.getCurrentTodoListe();
    this.crossedTodoList = this.todoService.getCrossedTodoListe();

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

    this.todoService.addObserverToCurrentList(observerCurrentList);
    this.todoService.addObserverToCrossedList(observerCrossedTodoList);
  }



}
