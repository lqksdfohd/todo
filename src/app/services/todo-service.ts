import { Injectable } from "@angular/core";
import { Observer, Subject } from "rxjs";
import { TodoModel } from "../models/todo-model";


@Injectable({"providedIn": "root"})
export class TodoService{
    listCurrentTodos:TodoModel[];
    listCurrentTodosObs:Subject<TodoModel[]>;

    listCrossedTodos:TodoModel[];
    listCrossedTodosObs:Subject<TodoModel[]>

    todoEnCours:TodoModel;
    todoEnCoursObs: Subject<TodoModel>;

    constructor(){
        this.listCurrentTodosObs = new Subject();
        this.listCrossedTodos = [];
        this.listCrossedTodosObs = new Subject();
        this.listCurrentTodos = [];
        this.todoEnCoursObs = new Subject();

        this.listCurrentTodos.push(new TodoModel("ranger garage", "ranger le garage avant de partir"));
        this.listCurrentTodos.push(new TodoModel("les courses", "faire les courses"));
        this.listCurrentTodos.push(new TodoModel("livre", "rendre livre à la b.u"))
    }

    getListeTodo():TodoModel[]{
        return this.listCurrentTodos;
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

    setTodoEnCours(todo:TodoModel):void{
        this.todoEnCours = todo;
        this.todoEnCoursObs.next(todo);
    }

    ajouterObserveurATodoEnCours(observeur: Observer<TodoModel>){
        this.todoEnCoursObs.subscribe(observeur);
    }

    creerUneTodo(todo:TodoModel){
        this.listCurrentTodos.unshift(todo);
        this.listCurrentTodosObs.next(this.listCurrentTodos);
    }

}