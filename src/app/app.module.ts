import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo-service';
import { UneTodoComponent } from './une-todo/une-todo.component';
import { ListCurrentTodosComponent } from './list-current-todos/list-current-todos.component';

@NgModule({
  declarations: [
    AppComponent,UneTodoComponent, ListCurrentTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
