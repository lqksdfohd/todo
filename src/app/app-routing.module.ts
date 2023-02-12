import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerTodoComponent } from './creer-todo/creer-todo.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { ToutesTodoComponent } from './toutes-todo/toutes-todo.component';

const routes: Routes = [
  {path: 'todo/listes', component:ToutesTodoComponent},
  {path: '', redirectTo: 'todo/listes', pathMatch: 'full'},
  {path: 'todo/creer', component: CreerTodoComponent},
  {path: 'todo/:id', component: DetailTodoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
