import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo-model';
import { ResetService } from '../services/reset-service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input()
  todoDetail:TodoModel;
  
  constructor(private resetService:ResetService) { }

  ngOnInit(): void {
  }

  quitterEcran(){
    this.resetService.resetEcran();
  }


}
