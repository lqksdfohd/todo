import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'app-une-todo',
  templateUrl: './une-todo.component.html',
  styleUrls: ['./une-todo.component.css']
})
export class UneTodoComponent implements OnInit {

  @Input()
  todo:TodoModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
