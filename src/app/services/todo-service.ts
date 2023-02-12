import { Injectable } from "@angular/core";
import { Observer, Subject } from "rxjs";
import { TodoModel } from "../models/todo-model";
import { IdService } from "./id-service";


@Injectable({"providedIn": "root"})
export class TodoService{
    listCurrentTodos:TodoModel[];
    listCurrentTodosObs:Subject<TodoModel[]>;

    listCrossedTodos:TodoModel[];
    listCrossedTodosObs:Subject<TodoModel[]>

    constructor(private idService:IdService){
        this.listCurrentTodosObs = new Subject();
        this.listCrossedTodos = [];
        this.listCrossedTodosObs = new Subject();
        this.listCurrentTodos = [];
        this.listCurrentTodos.push(new TodoModel("ranger garage", "ranger le garage avant de partir", idService.getId()));
        this.listCurrentTodos.push(new TodoModel("les courses", "faire les courses", idService.getId()));
        this.listCurrentTodos.push(new TodoModel("livre", "rendre livre à la b.u", idService.getId()))
    }

    getCurrentTodoListe():TodoModel[]{
        return this.listCurrentTodos;
    }
    getCrossedTodoListe(){
        return this.listCrossedTodos;
    }

    addObserverToCurrentList(observeur:Observer<TodoModel[]>):void{
        this.listCurrentTodosObs.subscribe(observeur);
    }

    addObserverToCrossedList(observer:Observer<TodoModel[]>):void{
        this.listCrossedTodosObs.subscribe(observer);
    }

    crossATodo(todo:TodoModel):void{
        if(todo.done == true){
            return;
        }
        const newList = this.listCurrentTodos.filter(t => t.title != todo.title && t.description != todo.description);
        todo.done = true;
        this.listCurrentTodos = newList;
        this.listCrossedTodos.push(todo);
        this.listCurrentTodosObs.next(this.listCurrentTodos);
        this.listCrossedTodosObs.next(this.listCrossedTodos);
    }

    getTodoParId(id:string){
        const deTodoCurrent = this.listCurrentTodos.filter(todo => todo.id == id);
        const deTodoCrossed = this.listCrossedTodos.filter(todo => todo.id == id);
        if(deTodoCurrent.length > 0){
            return deTodoCurrent[0];
        }else{
            return deTodoCrossed[0];
        }
    }

    ajouterUneTodo(todo: TodoModel){
        this.listCurrentTodos.unshift(todo);
        this.listCurrentTodosObs.next(this.listCurrentTodos);
    }

}