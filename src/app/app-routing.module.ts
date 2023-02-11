import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { ToutesTodoComponent } from './toutes-todo/toutes-todo.component';

const routes: Routes = [
  {path: 'todo/listes', component:ToutesTodoComponent},
  {path: '', redirectTo: 'todo/listes', pathMatch: 'full'},
  {path: 'todo/:id', component: DetailTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
