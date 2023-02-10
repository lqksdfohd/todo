import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { TodoModel } from './models/todo-model';
import { TodoService } from './services/todo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentTodoList: TodoModel[];
  crossedTodoList: TodoModel[];

  constructor(private todoService: TodoService) { }

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

    this.todoService.addObserverToCurrentList(observerCurrentList);
    this.todoService.addObserverToCrossedList(observerCrossedTodoList);
  }



}
