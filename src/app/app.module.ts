import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo-service';
import { UneTodoComponent } from './une-todo/une-todo.component';
import { ListCurrentTodosComponent } from './list-current-todos/list-current-todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ResetService } from './services/reset-service';
import { ListCrossedTodosComponent } from './list-crossed-todos/list-crossed-todos.component';
import { PopupCreerTodoComponent } from './popup-creer-todo/popup-creer-todo.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,UneTodoComponent, ListCurrentTodosComponent, TodoDetailComponent, ListCrossedTodosComponent, PopupCreerTodoComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TodoService,ResetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
