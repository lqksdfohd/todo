import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TodoModel } from '../models/todo-model';
import { IdService } from '../services/id-service';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-creer-todo',
  templateUrl: './creer-todo.component.html',
  styleUrls: ['./creer-todo.component.css']
})
export class CreerTodoComponent implements OnInit {

  fg:FormGroup;

  constructor(private idService:IdService, private todoService:TodoService, private router:Router) { 
    this.fg = new FormGroup({
      titre: new FormControl('', Validators.required),
      description: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  formulaireNonValide(){
    return this.fg.touched && this.fg.invalid;
  }

  validerForm(){
    if(this.fg.touched && this.fg.valid){
      const titre = this.fg.get('titre').value;
      const description = this.fg.get('description').value;
      const todo = new TodoModel(titre, description, this.idService.getId());
      this.todoService.ajouterUneTodo(todo);
      this.naviguerVersListeDesTodos();
    }
  }

  naviguerVersListeDesTodos(){
    this.router.navigate(['/todo', 'listes']);
  }

}
