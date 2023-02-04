import { Injectable } from "@angular/core";
import { Observer, Subject } from "rxjs";


@Injectable({"providedIn" : "root"})
export class ResetService{
    resetObs:Subject<boolean>;
    constructor(){
        this.resetObs = new Subject();
    }

    resetEcran(){
        this.resetObs.next(true);
    }

    ajouterObserveur(observeur:Observer<boolean>){
        this.resetObs.subscribe(observeur);
    }
}