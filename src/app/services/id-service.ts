import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class IdService{
    id:number = 0;

    getId():string{
        return String(this.id++);
    }
}