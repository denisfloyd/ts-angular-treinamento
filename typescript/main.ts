import Todolista from './classe';

const lista = new Todolista();

// ADD 1 OBJETO
lista.addTodo({
    title: 'Aprendendo TypeScript',
    isDone: false
});
// ADD 1 OBJETO
lista.addTodo({
    title: 'Aprendendo Angular 5',
    isDone: false
});

// LISTA TODOS
let newTodos = [{
    title: 'Tomar café',
    isDone: true
},
{
    title: 'Tomar água',
    isDone: true
}]; 

lista.addTodos([{
    title: 'Tomar café',
    isDone: true
},
{
    title: 'Tomar água',
    isDone: true
}]);

console.log(lista.get());
console.log(newTodos);