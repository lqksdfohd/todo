export class TodoModel{
    done:boolean;
    description:string;
    title:string;

    constructor(title:string, description:string){
        this.title = title;
        this.description = description;
        this.done = false;
    }
}