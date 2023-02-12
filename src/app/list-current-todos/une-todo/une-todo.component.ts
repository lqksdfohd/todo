import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from '../../models/todo-model';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-une-todo',
  templateUrl: './une-todo.component.html',
  styleUrls: ['./une-todo.component.css']
})
export class UneTodoComponent implements OnInit {

  @Input()
  todo:TodoModel;
  
  constructor(private todoService:TodoService, private router:Router) { }

  ngOnInit(): void {
  }

  crossThisTodo(){
    this.todoService.crossATodo(this.todo);
  }

  naviguerVersDetail(){
    this.router.navigate(['todo', this.todo.id]);
  }
}
