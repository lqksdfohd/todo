import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoModel } from '../models/todo-model';
import { ResetService } from '../services/reset-service';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-popup-creer-todo',
  templateUrl: './popup-creer-todo.component.html',
  styleUrls: ['./popup-creer-todo.component.css']
})
export class PopupCreerTodoComponent implements OnInit {

  fg:FormGroup;

  constructor(private resetService:ResetService, private todoService:TodoService) { 
    this.fg = new FormGroup({
      titre: new FormControl("", [Validators.required]),
      description: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  quitterEcran(){
    this.resetService.resetEcran();
  }

  getTitreFC(){
    return this.fg.get("titre");
  }

  sauvegarder(){
    if(this.fg.touched && this.fg.valid){
    const titre = this.fg.controls["titre"].value;
    const description = this.fg.controls["description"].value;
    console.log(titre);
    console.log(description);
    const todo = new TodoModel(titre, description);
    this.todoService.creerUneTodo(todo);
    this.quitterEcran();
    }
  }

}
