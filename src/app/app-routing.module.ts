import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToutesTodoComponent } from './toutes-todo/toutes-todo.component';

const routes: Routes = [
  {path: 'todo/toutes', component:ToutesTodoComponent},
  {path: '', redirectTo: 'todo/toutes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
