interface toDO {
    title: string
    isDone: boolean
}

export default class Todolista { 
    private itens : toDO[] = [];

    addTodo(novaTodo : toDO) : number {
        this.itens.push(novaTodo);
        return this.itens.length;
    };

    addTodos(novasTodos : toDO[]) : number {
        //this.itens.concat(novasTodos);
        novasTodos.forEach(nova => {
            this.itens.push(nova);
        });

        return this.itens.length;
    }

    get() {
        return this.itens;
    }
}