import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo-service';
import { UneTodoComponent } from './une-todo/une-todo.component';
import { ListCurrentTodosComponent } from './list-current-todos/list-current-todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ResetService } from './services/reset-service';

@NgModule({
  declarations: [
    AppComponent,UneTodoComponent, ListCurrentTodosComponent, TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService,ResetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
