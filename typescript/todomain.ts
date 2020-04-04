import TodoList from "./todoclasses"; 

const list = new TodoList();

list.addTodo({
    title: 'Learn Typescript',
    isDone: false
})

console.log(list);