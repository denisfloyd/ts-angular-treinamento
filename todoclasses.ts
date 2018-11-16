interface ToDO {
    title: string;
    isDone: boolean;
}

export default class TodoList {
    private itens : ToDO[] = [];
    
    addTodo(newTodo : ToDO) : number {
        this.itens.push(newTodo);
        return this.itens.length; 
    }
}

