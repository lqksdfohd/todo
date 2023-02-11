import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoModel } from '../models/todo-model';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {

  id:string;
  todo:TodoModel;

  constructor(private activatedRoute:ActivatedRoute, private todoService:TodoService) {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
   }

  ngOnInit(): void {
    this.todo = this.todoService.getTodoParId(this.id);
  }

}
