import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo-service';
import { UneTodoComponent } from './list-current-todos/une-todo/une-todo.component';
import { ListCurrentTodosComponent } from './list-current-todos/list-current-todos.component';
import { ToutesTodoComponent } from './toutes-todo/toutes-todo.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { IdService } from './services/id-service';
import { CreerTodoComponent } from './creer-todo/creer-todo.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,UneTodoComponent, ListCurrentTodosComponent, ToutesTodoComponent, DetailTodoComponent, CreerTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule
  ],
  providers: [TodoService, IdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
