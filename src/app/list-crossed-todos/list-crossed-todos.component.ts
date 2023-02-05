import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'app-list-crossed-todos',
  templateUrl: './list-crossed-todos.component.html',
  styleUrls: ['./list-crossed-todos.component.css']
})
export class ListCrossedTodosComponent implements OnInit {

  @Input()
  listeTodo:TodoModel[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
