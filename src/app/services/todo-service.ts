import { Injectable } from "@angular/core";
import { Observer, Subject } from "rxjs";
import { TodoModel } from "../models/todo-model";


@Injectable({"providedIn": "root"})
export class TodoService{
    listeTodo:TodoModel[];
    listeTodoObs:Subject<TodoModel[]>;

    constructor(){
        this.listeTodoObs = new Subject();
        this.listeTodo = [];
        this.listeTodo.push(new TodoModel("ranger garage", "ranger le garage avant de partir"));
        this.listeTodo.push(new TodoModel("les courses", "faire les courses"));
        this.listeTodo.push(new TodoModel("livre", "rendre livre à la b.u"))
    }

    getListeTodo():TodoModel[]{
        return this.listeTodo;
    }

    ajouterObserveur(observeur:Observer<TodoModel[]>):void{
        this.listeTodoObs.subscribe(observeur);
    }
}