import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-current-todos.component.html',
  styleUrls: ['./list-current-todos.component.css']
})
export class ListCurrentTodosComponent implements OnInit {

  @Input()
  listeTodo:TodoModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
