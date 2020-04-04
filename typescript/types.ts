let isDone : boolean = false;
let number : number = 100;
let numbers : number[] = [1, 2, 3];
let nome : string = 'Five';

console.log(isDone);
console.log(number);
console.log(numbers);
console.log(nome);

interface toDO {
    title: string;
    isDone: boolean;
}

let items : toDO[] = [];

items.push({
    title: 'Learn Typescript',
    isDone: false
},
{
    title: 'Fix bike',
    isDone: true
})

console.log(items);