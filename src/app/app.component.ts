import { Component, OnInit } from '@angular/core';
import { TodoModel } from './models/todo-model';
import { TodoService } from './services/todo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listeTodo:TodoModel[];

  constructor(private todoService:TodoService){}

  ngOnInit(): void {
      this.listeTodo = this.todoService.getListeTodo();
  }



}
