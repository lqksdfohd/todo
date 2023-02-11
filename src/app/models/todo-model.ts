export class TodoModel{
    done:boolean;
    description:string;
    title:string;
    id:string;

    constructor(title:string, description:string, id:string){
        this.title = title;
        this.description = description;
        this.done = false;
        this.id = id;
    }
}